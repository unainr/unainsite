"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

interface SignUpInput {
  name: string;
  email: string;
  password: string;
}

export function useSignUp() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: SignUpInput) => {
      const { data, error } = await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (error) throw new Error(error.message ?? "Sign up failed.");
      return data;
    },
    onSuccess: () => {
      toast.success("Account created! Welcome aboard.");
      router.push("/dashboard");
      router.refresh();
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
}