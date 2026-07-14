import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  BarChart3,
  CheckCircle2,
  PenTool,
  Palette,
  Code2,
  TrendingUp,
  Briefcase,
  BadgeCheck,
  Wrench,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCourse } from "@/data/courses";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

const icons: Record<string, LucideIcon> = { PenTool, Palette, Code2, TrendingUp };

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourse(courseId ?? "");

  if (!course) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl font-bold text-navy">Course not found</h1>
        <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
        <Button asChild variant="hero" size="lg">
          <Link to="/courses">Browse all courses</Link>
        </Button>
      </div>
    );
  }

  const Icon = icons[course.icon] ?? PenTool;

  return (
    <>
      <Seo
        title={`${course.title} Course | Nexa Skills Hub`}
        description={course.description}
        ogTitle={`${course.title} | Nexa Skills Hub`}
        ogDescription={course.description}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-navy pt-32 pb-16 text-navy-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-orange text-primary-foreground shadow-glow">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <p className="text-sm font-medium text-primary">{course.tagline}</p>
                  <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{course.title}</h1>
                </div>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                {course.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  <BarChart3 className="h-4 w-4 text-primary" /> {course.level}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  <BadgeCheck className="h-4 w-4 text-primary" /> Certification Included
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Enroll Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  className="border-2 border-white/40 bg-transparent text-navy-foreground hover:bg-white hover:text-navy"
                >
                  <Link to="/contact">Book Free Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {course.outcomes.map((o, i) => (
            <Reveal key={o} delay={(i % 4) * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-medium text-navy">{o}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tools + Curriculum */}
      <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Wrench className="h-4 w-4" /> Tools Covered
            </span>
            <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">Tools & Skills you'll master</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {course.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-navy shadow-soft transition-colors hover:border-primary hover:text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <span className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Briefcase className="h-4 w-4" /> Projects
            </span>
            <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">Projects you'll build</h3>
            <ul className="mt-6 space-y-3">
              {course.projects.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-xl bg-background px-4 py-3 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-navy">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Target className="h-4 w-4" /> Curriculum
            </span>
            <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">The complete curriculum</h2>
            <div className="mt-6 space-y-4">
              {course.curriculum.map((mod, i) => (
                <div key={mod.title} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-orange text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <h4 className="text-base font-bold text-navy">{mod.title}</h4>
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {mod.lessons.map((l) => (
                      <p key={l} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/70" /> {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Careers + Certification */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-navy p-8 text-navy-foreground shadow-card">
              <TrendingUp className="h-9 w-9 text-primary" />
              <h3 className="mt-4 text-2xl font-bold">Career Opportunities</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">
                Roles you'll be ready for after completing this program:
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {course.careers.map((c) => (
                  <span key={c} className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl bg-orange-light p-8 shadow-soft">
                <BadgeCheck className="h-9 w-9 text-primary" />
                <h3 className="mt-4 text-2xl font-bold text-navy">Certification</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.certification}</p>
              </div>
              <div className="rounded-3xl bg-gradient-orange p-8 text-primary-foreground shadow-glow">
                <Briefcase className="h-9 w-9" />
                <h3 className="mt-4 text-2xl font-bold">Placement Assistance</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
                  Resume building, portfolio review, mock interviews and access to 150+ hiring partners
                  to help you land the right role.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection title={`Ready to master ${course.title}?`} subtitle="Book a free demo and start building your career today." />
    </>
  );
}