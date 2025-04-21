'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'

export default function TasksPage() {
  const supabase = useSupabaseClient()
  const session = useSession()
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    if (session) {
      supabase
        .from('tasks')
        .select('*')
        .eq('assigned_to', session.user.id)
        .then(({ data }) => setTasks(data || []))
    }
  }, [session])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="bg-brand-slate p-3 rounded">{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
