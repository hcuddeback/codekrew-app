export async function GET() {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = 'https://github.com/login/oauth/authorize' + '?client_id=${clientId}&scope=repo';
    return Response.redirect(redirectUri);
}