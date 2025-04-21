"use client"
import { useSearchParams } from "next/navigation"

export default function SetupFlowPage() {
  const searchParams = useSearchParams();
  const template = searchParams.get("template");

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Site Setup: {template === "astro-notion" ? "Astro + Notion" : "Astro Static"}</h1>
      <ol className="list-decimal ml-6 space-y-2 text-lg">
        <li>✅ Select Template</li>
        <li>🔗 Connect GitHub</li>
        <li>🚀 Push Template</li>
        //{template === "astro-notion" and <li>📄 Setup Notion</li>}
        <li>🌐 Connect Vercel</li>
        <li>🎉 Launch Site</li>
      </ol>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Step 2: Connect GitHub</h2>
        <a href="/api/github/connect" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Connect GitHub
        </a>
      </div>

    </div>
  );
}
