"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signInSchema, SignInValues } from "../../server/schema";
import { useSignIn } from "../../hooks/use-signin";


export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useSignIn();

  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SignInValues) {
    mutate(values);
  }

  return (
    <form
      id="sign-in-form"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup>
        {/* ── Email ── */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="sign-in-email">Email address</FieldLabel>
              <Input
                {...field}
                id="sign-in-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
                disabled={isPending}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* ── Password ── */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="sign-in-password">Password</FieldLabel>
                <Link
                  href="/forgot-password"
                  tabIndex={-1}
                  className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  {...field}
                  id="sign-in-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  autoComplete="current-password"
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  className="pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      {/* ── Submit ── */}
      <div className="mt-6 space-y-4">
        <Button
          type="submit"
          form="sign-in-form"
          disabled={isPending}
          className="w-full h-11"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in…
            </>
          ) : (
            "Sign in"
          )}
        </Button>

        {/* <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-foreground underline-offset-4 hover:underline transition-colors"
          >
            Sign up
          </Link>
        </p> */}
      </div>
    </form>
  );
}