import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface LearningModuleCardProps {
  title: string;
  description: string;
  slug: string;
  icon: LucideIcon;
}

export default function LearningModuleCard({
  title,
  description,
  slug,
  icon: Icon,
}: LearningModuleCardProps) {
  return (
    <Link href={`/learn/modules/${slug}`} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
