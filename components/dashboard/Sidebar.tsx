import Link from "next/link";

const links = [
  { name: "Overview", href: "/dashboard/overview" },
  { name: "Tasks", href: "/dashboard/tasks" },
  { name: "Bots", href: "/dashboard/bots" },
  { name: "Roadmap", href: "/dashboard/roadmap" },
  { name: "Settings", href: "/dashboard/settings" }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-brand-indigo p-4">
      <h2 className="text-xl font-semibold mb-6">CodeKrew</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block hover:text-brand-orange">
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
