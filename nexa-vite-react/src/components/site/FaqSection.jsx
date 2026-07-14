import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
const defaultFaqs = [
    {
        q: "Who can join Nexa Skills Hub?",
        a: "Anyone! Students, graduates, working professionals and career switchers are all welcome. Our programs start from the basics and scale up to advanced, industry-level skills.",
    },
    {
        q: "Is coding required to get started?",
        a: "Not at all. Courses like UI/UX Design, Graphic Design and Digital Marketing require zero coding. For Full Stack Development, we teach you everything from scratch.",
    },
    {
        q: "Do you provide certificates?",
        a: "Yes. Every course includes an industry-recognized Nexa Skills Hub certification upon successful completion, which you can showcase on your resume and LinkedIn.",
    },
    {
        q: "Will I get placement assistance?",
        a: "Absolutely. We provide resume building, portfolio review, mock interviews, HR preparation and connect you with our hiring partners to help you land the right role.",
    },
    {
        q: "Are courses online or offline?",
        a: "We offer both online (live interactive) and offline classroom batches, so you can choose the mode that fits your schedule and learning style.",
    },
    {
        q: "What is the typical course duration?",
        a: "Durations range from 3 to 6 months depending on the program, with flexible weekday and weekend batches available.",
    },
];
export function FaqSection({ faqs = defaultFaqs, }) {
    return (<section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know before enrolling. Still have questions? Talk to our team."/>
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (<AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-border bg-background px-5 shadow-soft">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>))}
          </Accordion>
        </Reveal>
      </div>
    </section>);
}
