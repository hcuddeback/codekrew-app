//import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/src/utils/supabase/server";
//import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function RoadmapPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
  
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Roadmap</h1>
    </section>
  );
}
