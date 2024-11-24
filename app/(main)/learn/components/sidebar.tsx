import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  id: number;
  title: string;
}

interface SidebarProps {
  modules: Module[];
  activeModule: Module;
  setActiveModule: (module: Module) => void;
  completedModules: number[];
}

export function Sidebar({
  modules,
  activeModule,
  setActiveModule,
  completedModules,
}: SidebarProps) {
  return (
    <nav className="w-64 bg-muted p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Learning Roadmap</h2>
      <ul className="space-y-2">
        {modules.map((module) => (
          <li key={module.id}>
            <button
              onClick={() => setActiveModule(module)}
              className={cn(
                "flex items-center w-full p-2 rounded-lg text-left transition-colors",
                activeModule.id === module.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted-foreground/10"
              )}
            >
              {completedModules.includes(module.id) ? (
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 mr-2" />
              )}
              <span>{module.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
