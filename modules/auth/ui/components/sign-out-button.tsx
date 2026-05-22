"use client";

import { Loader2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSignOut } from "../../hooks/use-signout";

interface SignOutButtonProps {
  variant?: "default" | "ghost" | "outline" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function SignOutButton({
  variant = "ghost",
  size = "sm",
  className,
}: SignOutButtonProps) {
  const { mutate, isPending } = useSignOut();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => mutate()}
      disabled={isPending}
      className={className}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <LogOut className="h-4 w-4 mr-2" />
          Sign out
        </>
      )}
    </Button>
  );
}