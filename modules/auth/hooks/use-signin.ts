"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

interface SignInInput {
  email: string;
  password: string;
}

export function useSignIn() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: SignInInput) => {
      const { data, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });

      if (error) throw new Error(error.message ?? "Sign in failed.");
      return data;
    },
    onSuccess: () => {
      toast.success("Welcome back!");
      router.push("/dashboard");
      router.refresh();
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
}