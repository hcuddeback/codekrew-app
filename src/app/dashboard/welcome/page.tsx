export default function WelcomePage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to CodeKrew 👋</h1>
      <p className="mb-6">What would you like to build today?</p>
      <div className="grid gap-4">
        <a href="/setup-flow?template=astro-static" className="p-4 border rounded hover:bg-slate-100">
          🚀 Astro Static Site
        </a>
        <a href="/setup-flow?template=astro-notion" className="p-4 border rounded hover:bg-slate-100">
          🧠 Astro + Notion CMS Site
        </a>
      </div>
    </div>
  );
}
