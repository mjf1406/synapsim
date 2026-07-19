import {
  BookOpen,
  Gamepad2,
  GraduationCap,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featureList: FeatureItem[] = [
  {
    icon: MonitorSmartphone,
    title: "Built for classrooms",
    description: "Works on laptops and tablets so students can explore at school or at home.",
  },
  {
    icon: Gamepad2,
    title: "Playful simulations",
    description:
      "Learn by trying things out—drag, tap, and experiment instead of memorizing jargon.",
  },
  {
    icon: Sparkles,
    title: "Age-friendly explanations",
    description: "Language and visuals tuned for elementary and middle school curiosity.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by design",
    description: "No accounts required to start learning. Privacy-minded and classroom-ready.",
  },
  {
    icon: BookOpen,
    title: "Leveled support",
    description: "Optional reading helpers and vocabulary so every learner can join in.",
  },
  {
    icon: GraduationCap,
    title: "Teacher-friendly",
    description: "Same concepts on-screen and off-screen with printable activities coming soon.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="mb-2 text-center text-lg tracking-wider text-primary">Features</h2>

      <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
        Features that help you learn and teach
      </h2>

      <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
        Designed for differentiation and to make AI and robotics feel approachable.
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureList.map(({ icon: Icon, title, description }) => (
          <Card
            key={title}
            className="h-full rounded-xl ring-border transition-shadow hover:shadow-md"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <div className="mb-2 inline-flex items-center justify-center rounded-full bg-primary/20 p-2 ring-8 ring-primary/10">
                <Icon className="size-6 text-primary" aria-hidden />
              </div>
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
