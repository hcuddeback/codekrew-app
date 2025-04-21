'use client'

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [session])

  if (!session) return null
  return <>{children}</>
}
