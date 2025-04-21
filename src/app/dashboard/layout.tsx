import Sidebar from "@/components/dashboard/Sidebar";
import RequireAuth from "@/components/RequireAuth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <div className="flex min-h-screen bg-brand-navy text-white">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </RequireAuth>
  );
}
