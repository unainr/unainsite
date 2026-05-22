"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import { signUpSchema, SignUpValues } from "../../server/schema";
import { useSignUp } from "../../hooks/use-signup";


export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
  const { mutate, isPending } = useSignUp();

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: SignUpValues) {
    const { confirmPassword: _, ...rest } = values;
    mutate(rest);
  }

  return (
    <form
      id="sign-up-form"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup>
        {/* ── Name ── */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="sign-up-name">Full name</FieldLabel>
              <Input
                {...field}
                id="sign-up-name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                aria-invalid={fieldState.invalid}
                disabled={isPending}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* ── Email ── */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="sign-up-email">Email address</FieldLabel>
              <Input
                {...field}
                id="sign-up-email"
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
              <FieldLabel htmlFor="sign-up-password">Password</FieldLabel>
              <InputGroup>
                <div className="relative w-full">
                  <Input
                    {...field}
                    id="sign-up-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    autoComplete="new-password"
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
                <InputGroupAddon align="inline-end">
                  <InputGroupText className="tabular-nums text-xs text-muted-foreground">
                    {field.value.length}/72
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription>
                Must be at least 8 characters.
              </FieldDescription>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* ── Confirm Password ── */}
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="sign-up-confirm">Confirm password</FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  id="sign-up-confirm"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  className="pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  {showConfirm ? (
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
          form="sign-up-form"
          disabled={isPending}
          className="w-full h-11"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account…
            </>
          ) : (
            "Create account"
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-foreground underline-offset-4 hover:underline transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}