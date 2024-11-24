import { Button } from "@/components/ui/button";

interface Module {
  id: number;
  title: string;
  content: string;
}

interface ModuleContentProps {
  module: Module;
  onComplete: () => void;
  isCompleted: boolean;
}

export function ModuleContent({
  module,
  onComplete,
  isCompleted,
}: ModuleContentProps) {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">{module.title}</h2>
      <div className="prose max-w-none mb-6">
        <p>{module.content}</p>
        {/* Add more content here */}
      </div>
      <Button onClick={onComplete} disabled={isCompleted} className="mt-4">
        {isCompleted ? "Completed" : "Mark as Complete"}
      </Button>
    </main>
  );
}
