import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeacherResourceProps {
  title: string;
  description: string;
}

const resourceList: TeacherResourceProps[] = [
  {
    title: "Classroom activity packs",
    description:
      "Ready-to-run lessons that match the on-screen activities—discussion prompts, exit tickets, and more.",
  },
  {
    title: "Printable robot challenges",
    description:
      "Hands-on worksheets and cutouts so students can practice sequencing and design away from screens.",
  },
];

export function TeachersSection() {
  return (
    <section id="teachers" className="container scroll-mt-20 py-24 sm:py-32">
      <h2 className="mb-2 text-center text-lg tracking-wider text-primary">Teachers</h2>

      <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
        Classroom materials
      </h2>
      <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
        Pair interactive explorations with printable activities for the same AI and robotics ideas.
      </h3>

      <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[70%]">
        {resourceList.map(({ title, description }) => (
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
