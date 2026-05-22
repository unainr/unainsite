import { AuthCard } from '@/modules/auth/ui/components/auth-card'
import { SignUpForm } from '@/modules/auth/ui/components/signup-form'
import React from 'react'

const SignUpPage = () => {
  return (
    <AuthCard
      title="Create an account"
      description="Enter your details below to get started"
    >
      <SignUpForm />
    </AuthCard>
  )
}

export default SignUpPage