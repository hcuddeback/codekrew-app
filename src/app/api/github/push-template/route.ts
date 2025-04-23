import { NextRequest } from "next/server";
import { extractFilesFromZipBuffer } from "@/lib/unzipAndBuildFilesArray";
import { getUserGitHubToken } from "@/lib/github";
import { createAndPushRepo } from "@/lib/github";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const { templateUrl, repoName } = await req.json();

  const token = await getUserGitHubToken();
  const response = await fetch(templateUrl);
  const zipBuffer = await response.arrayBuffer();

  const files = extractFilesFromZipBuffer(Buffer.from(zipBuffer));
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const result = await createAndPushRepo({
    token,
    repoName,
    files,
  });

  const user = await supabase.auth.getUser(); // Retrieve the user object
  await supabase.from("site_tasks").insert({
    id: user.data?.id, // Use the user's ID
    step: "github_push",
    status: "complete",
  });
  
  return Response.json(result);
}
