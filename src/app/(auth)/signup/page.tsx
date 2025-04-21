'use client'

import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(error.message)
    } else {
      router.push('/setup-profile')
    }
  }

  const handleMagicLink = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setError(error.message)
    } else {
      setMessage('Magic link sent! Check your inbox.')
    }
  }

  const handleOAuth = async (provider: 'github' | 'google') => {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-brand-navy to-brand-indigo flex items-center justify-center px-4">
      <div className="bg-white text-black w-full max-w-md p-8 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-brand-navy">Create an Account</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {message && <p className="text-green-600 text-sm text-center">{message}</p>}
        
        <input
          className="w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          onClick={handleSignup}
          className="bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition w-full"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={handleMagicLink}
          className="bg-brand-slate text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition w-full"
        >
          Send Magic Link
        </button>

        <div className="text-center text-sm text-slate-500 pt-2">or sign up with</div>

        <button
          type="button"
          onClick={() => handleOAuth('github')}
          className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition w-full"
        >
          GitHub
        </button>

        <button
          type="button"
          onClick={() => handleOAuth('google')}
          className="bg-white border text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full"
        >
          Google
        </button>
      </div>
    </div>
  )
}
