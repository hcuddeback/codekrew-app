'use client'

import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SetupProfilePage() {
  const supabase = useSupabaseClient()
  const session = useSession()
  const router = useRouter()
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from('profiles').upsert({
      id: session?.user.id,
      name,
      role
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-brand-navy to-brand-indigo flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white text-black w-full max-w-md p-8 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-brand-navy">Set Up Your Profile</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        
        <input
          className="w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo"
          type="text"
          placeholder="Display name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select role</option>
          <option value="Founder">Founder</option>
          <option value="Developer">Developer</option>
          <option value="PM">Project Manager</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition w-full"
        >
          {loading ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </div>
  )
}
