import Header from "@/components/layout/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen font-sans">
      <aside className="w-56 bg-slate-50 border-r p-4">
        <nav className="space-y-4 text-sm font-medium">
          <a href="/dashboard" className="block text-slate-700 hover:text-brand-indigo">Dashboard</a>
          <a href="/projects" className="block text-slate-700 hover:text-brand-indigo">Projects</a>
          <a href="/progress" className="block text-slate-700 hover:text-brand-indigo">Progress</a>
          <a href="/settings" className="block text-slate-700 hover:text-brand-indigo">Settings</a>
        </nav>
      </aside>
      <main className="flex-1 bg-white">
        <Header />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
