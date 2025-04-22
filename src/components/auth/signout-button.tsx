"use client";

import { signout } from "@/src/actions/auth/actions";
import { Button } from "@/src/components/ui/button";

export default function SignOutButton() {
  return (
    <Button
      variant="ghost"
      onClick={async () => {
        await signout();
      }}
    >
      Sign Out
    </Button>
  );
}