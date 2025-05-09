"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = React.forwardRef(
  ({ className, ...props }: { className?: string } & DropdownMenuPrimitive.DropdownMenuContentProps, ref: React.Ref<HTMLDivElement>) => (
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={cn("z-50 rounded-md border bg-white p-1 text-sm shadow-md", className)}
      {...props}
    />
  )
);
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef(
  ({ className, ...props }: DropdownMenuPrimitive.DropdownMenuItemProps, ref: React.Ref<HTMLDivElement>) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn("cursor-pointer select-none px-3 py-2 text-sm hover:bg-slate-100", className)}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
};
