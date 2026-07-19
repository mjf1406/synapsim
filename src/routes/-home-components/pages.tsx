import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LearningPageProps {
  title: string;
  description: string;
}

const pageList: LearningPageProps[] = [
  {
    title: "What is AI?",
    description:
      "Meet artificial intelligence through friendly examples—how machines learn patterns from examples.",
  },
  {
    title: "Meet the robots",
    description:
      "Explore sensors, motors, and helpers that move, see, and follow simple instructions.",
  },
  {
    title: "How computers think",
    description:
      "Break big problems into tiny steps with puzzles that feel like games, not lectures.",
  },
];

export function PagesSection() {
  return (
    <section id="pages" className="container scroll-mt-20 py-24 sm:py-32">
      <h2 className="mb-2 text-center text-lg tracking-wider text-primary">Learn</h2>

      <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
        Choose what to learn
      </h2>
      <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
        Pick a topic and dive into interactive activities built for curious kids.
      </h3>

      <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[80%] lg:grid-cols-3">
        {pageList.map(({ title, description }) => (
          <Card
            key={title}
            className="h-full rounded-xl bg-muted/60 ring-border transition-shadow hover:shadow-lg dark:bg-card"
          >
            <CardHeader className="gap-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base font-semibold">{title}</CardTitle>
                <Badge variant="secondary" className="rounded-full shrink-0">
                  Soon
                </Badge>
              </div>
              <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
