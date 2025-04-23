import { Card } from "@/components/ui/card";

const projects = [
  { id: 1, name: "Astro Starter Site", status: "Live", updated: "2 hours ago" },
  { id: 2, name: "Notion + Astro CMS", status: "Pending", updated: "1 day ago" },
  { id: 3, name: "Vercel Blog Clone", status: "Live", updated: "3 days ago" },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-sm text-slate-500">Status: {project.status}</p>
            <p className="text-xs text-slate-400">Updated: {project.updated}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
