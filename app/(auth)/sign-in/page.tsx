import { AuthCard } from '@/modules/auth/ui/components/auth-card'
import { SignInForm } from '@/modules/auth/ui/components/sign-inform'
import React from 'react'

const SignInPage = () => {
  return (
    <>
    <AuthCard
      title="Welcome back"
      description="Sign in to your account to continue"
    >
      <SignInForm />
    </AuthCard>
    </>
  )
}

export default SignInPage