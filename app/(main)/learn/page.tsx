"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Sidebar } from "./components/sidebar";
import { ModuleContent } from "./components/module-content";

const modules = [
  {
    id: 1,
    title: "Introduction to Phishing",
    content: "Content for Introduction to Phishing",
  },
  {
    id: 2,
    title: "Common Phishing Techniques",
    content: "Content for Common Phishing Techniques",
  },
  {
    id: 3,
    title: "Identifying Suspicious Emails",
    content: "Content for Identifying Suspicious Emails",
  },
  {
    id: 4,
    title: "Best Practices for Prevention",
    content: "Content for Best Practices for Prevention",
  },
  {
    id: 5,
    title: "Reporting Phishing Attempts",
    content: "Content for Reporting Phishing Attempts",
  },
];

export default function LearnPage() {
  const [activeModule, setActiveModule] = useState(modules[0]);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const handleModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const progress = (completedModules.length / modules.length) * 100;

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <h1 className="text-2xl font-bold">Horizon: Phishing Prevention</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Progress:</span>
          <Progress value={progress} className="w-64" />
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          modules={modules}
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          completedModules={completedModules}
        />
        <ModuleContent
          module={activeModule}
          onComplete={() => handleModuleComplete(activeModule.id)}
          isCompleted={completedModules.includes(activeModule.id)}
        />
      </div>
    </div>
  );
}
