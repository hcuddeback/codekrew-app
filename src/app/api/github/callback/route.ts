import { NextRequest } from "next/server";
import { createClient } from '@/app/lib/supabase/server';
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get('code');

    const res = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID, 
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
        }),
    });

    const data = await res.json();
    const accessToken = data.access_token;

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {       
            cookies: {
                get(name: string) {
                    return cookies().get(name)?.value
                },
          }, 
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();
    
    if (user?.id && accessToken) {
        await supabase
            .from("github_tokens")
            .upsert({ id: user.id, accessToken }, { onConflict: "id" });
    }
    console.log('GitHub access token:', accessToken?.slice(0, 6) + '...');

    return new Response('✅ GitHub connected! You may now return to your dashboard.',  {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
    });
}