import { NextRequest } from "next/server";
import { extractFilesFromZipBuffer } from "@/src/lib/unzipAndBuildFilesArray";
import { getUserGitHubToken } from "@/src/lib/github";
import { createAndPushRepo } from "@/src/lib/github";

export async function POST(req: NextRequest) {
  const { templateUrl, repoName } = await req.json();

  const token = await getUserGitHubToken();
  const response = await fetch(templateUrl);
  const zipBuffer = await response.arrayBuffer();

  const files = extractFilesFromZipBuffer(Buffer.from(zipBuffer));

  const result = await createAndPushRepo({
    token,
    repoName,
    files,
  });

  return Response.json(result);
}
