import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "free",
    question: "Is Synapsim free?",
    answer:
      "Yes. Synapsim is free for students and teachers while we build the first activities. Our goal is to keep the core learning experience accessible.",
  },
  {
    value: "grades",
    question: "What grade levels is it for?",
    answer:
      "Synapsim is aimed at elementary and middle school learners—roughly grades 3–8—with language and activities that stay playful without talking down.",
  },
  {
    value: "teachers",
    question: "Can teachers use it with a whole class?",
    answer:
      "Absolutely. Students can explore on devices in class or at home. Teacher materials (printables and activity packs) are on the way to support the same ideas off-screen.",
  },
  {
    value: "accounts",
    question: "Do students need accounts?",
    answer:
      "No accounts are required to start learning. We keep the path to exploring AI and robots as simple as possible.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="container py-24 sm:py-32 md:w-[700px]">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-center text-lg tracking-wider text-primary">FAQS</h2>
        <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
          Common Questions
        </h2>
      </div>

      <Accordion className="overflow-hidden rounded-xl border">
        {faqs.map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value} className="px-4">
            <AccordionTrigger className="py-4 text-sm font-medium">{question}</AccordionTrigger>
            <AccordionContent className="pb-4 text-sm text-muted-foreground">
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
