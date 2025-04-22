"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SetupFlowPage() {
    const searchParams = useSearchParams();
    const template = searchParams.get("template") || "astro-static";
    const [status, setStatus] = useState("");
    const [repoName, setRepoName] = useState(`my-${template}-site`);

    const templateLabel = template === "astro-notion" ? "Astro + Notion CMS Site" : "Astro Static Site";
    
    const handlePushTemplate = async () => {
        setStatus("Pushing to GitHub...");

        const res = await fetch("/api/github/push-template", {
            method: "POST",
            body: JSON.stringify({
                templateUrl: `https://your-storage.com/template-${template}.zip`, // update this to real storage location
                repoName,
            }),
            headers: { "Content-Type": "application/json" },
            });

        const result = await res.json();
        setStatus(result.repoUrl ? `✅ Repo created: ${result.repoUrl}` : "❌ Failed to push.");
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Site Setup: {templateLabel}</h1>

            <ol className="list-decimal ml-6 space-y-2 text-lg">
                <li>✅ Select Template: {templateLabel}</li>
                <li>🔗 Connect GitHub 
                    <div className="mt-2">
                        <a href="/api/github/connect" 
                        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Connect GitHub
                        </a>
                    </div>
                </li>

                <li>🚀 Push Template to Repository
                    <input
                        type="text"
                        placeholder="Enter repo name"
                        value={repoName}
                        onChange={(e) => setRepoName(e.target.value)}
                        className="w-full p-2 mt-2 border rounded"
                    />
                    <div className="mt-2">
                        <button
                            onClick={handlePushTemplate}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Push to GitHub
                        </button>
                     {status && <p className="mt-2 text-sm">{status}</p>}
                    </div>
                </li>
                {template === "astro-notion" && <li>📄 Connect Notion CMS</li>}
                <li>🌐 Connect Vercel Deployment</li>
                <li>🎉 Launch and View Live Site</li>
            </ol>
        </div>
    );
}