import { courses } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { FaqSection } from "@/components/site/FaqSection";
import { BadgeCheck, Briefcase, GraduationCap, Users } from "lucide-react";
import { Seo } from "@/components/site/Seo";

const highlights = [
  { icon: GraduationCap, title: "Expert-Led", desc: "Learn from working industry professionals." },
  { icon: Briefcase, title: "Live Projects", desc: "Build real work for your portfolio." },
  { icon: BadgeCheck, title: "Certification", desc: "Industry-recognized certificates." },
  { icon: Users, title: "Placement Support", desc: "Dedicated career and hiring help." },
];

export default function Courses() {
  return (
    <>
      <Seo title="Courses | Nexa Skills Hub" description="Explore career-focused courses at Nexa Skills Hub — UI/UX Design, Graphic Design, Full Stack Development and Digital Marketing with live projects and placement assistance." />
      <PageHero
        eyebrow="Our Courses"
        title="Courses that make you job-ready"
        subtitle="Hands-on, mentor-led programs built with industry experts. Pick your path and start building a career, not just learning theory."
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 4) * 0.05}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What's Included"
            title="Every course comes with more"
            subtitle="No matter which program you choose, you get the complete Nexa experience."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-2xl bg-background p-6 text-center shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-orange text-primary-foreground">
                    <h.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}