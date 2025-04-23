import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
  const supabase = createServerClient({
    cookies,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: tasks } = await supabase
    .from("site_tasks")
    .select("step, status")
    .eq("id", user?.id);

  return Response.json({ tasks });
}
