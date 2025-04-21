"use client";

import { useSearchParams } from "next/navigation";

export default function SetupFlowPage() {
    const searchParams = useSearchParams();
    const template = searchParams.get("template");

    const templateLabel = template === "astro-notion" ? "Astro + Notion CMS Site" : "Astro Static Site";

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

                <li>🚀 Push Template to Repository</li>
                {template === "astro-notion" && <li>🚀 Connect Notion CMS</li>}
                <li>🌐 Connect Vercel Deployment</li>
                <li>🎉 Launch and View Live Site</li>
            </ol>
        </div>
    );
}