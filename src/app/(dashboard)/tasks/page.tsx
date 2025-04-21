//import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/src/utils/supabase/server";
//import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function TasksPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      {/* {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="bg-brand-slate p-3 rounded">{task.title}</li>
          ))}
        </ul>
      )} */}
    </div>
  )
}
