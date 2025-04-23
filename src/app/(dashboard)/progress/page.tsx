"use client";
import { useEffect, useState } from "react";

export default function ProgressPage() {
  const [tasks, setTasks] = useState<{ step: string; status: string }[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("/api/site-tasks");
      const data = await res.json();
      setTasks(data.tasks || []);
    };
    fetchTasks();
  }, []);

  const getStepLabel = (step: string) => {
    switch (step) {
      case "github_auth":
        return "GitHub Connected";
      case "repo_push":
        return "Repo Pushed";
      case "vercel_link":
        return "Vercel Linked";
      case "notion_link":
        return "Notion CMS Connected";
      default:
        return step;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "text-green-600";
      case "pending":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Site Setup Progress</h1>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.step} className="flex justify-between border-b pb-1">
            <span>{getStepLabel(task.step)}</span>
            <span className={getStatusColor(task.status)}>{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
