'use client';

import Image from "next/image";
import { User, LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

export default function Header() {
  const router = useRouter();

  let supabase: SupabaseClient;

  const initializeSupabase = async () => {
    supabase = await createClient();
  };

  initializeSupabase();

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      router.push("/login");
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div className="flex items-center gap-2">
        <Image src="/logo/codekrew-icon.svg" alt="CodeKrew" width={32} height={32} />
        <span className="text-xl font-bold text-brand-indigo">CodeKrew</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            <span>Account</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mt-2 mr-2">
          <DropdownMenuItem onClick={() => router.push("/settings")}>
            <Settings className="mr-2 h-4 w-4" /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
