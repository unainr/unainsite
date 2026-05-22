"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export function useSignOut() {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const { error } = await authClient.signOut();
      if (error) throw new Error(error.message ?? "Sign out failed.");
    },
    onSuccess: () => {
      router.push("/sign-in");
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to sign out. Please try again.");
    },
  });
}