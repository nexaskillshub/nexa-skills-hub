import { Target, Eye, Heart, Users, Building2, Sparkles, GraduationCap, Briefcase, Rocket, Award, BookOpen, ShieldCheck, } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { FaqSection } from "@/components/site/FaqSection";
const values = [
    { icon: Heart, title: "Student First", desc: "Every decision we make starts with your success." },
    { icon: Sparkles, title: "Practical Excellence", desc: "We teach by doing, not just by lecturing." },
    { icon: ShieldCheck, title: "Integrity", desc: "Honest guidance and transparent outcomes, always." },
    { icon: Rocket, title: "Growth Mindset", desc: "We keep learning so you stay industry-relevant." },
];
const method = [
    { icon: BookOpen, title: "Learn by Doing", desc: "Concepts taught through real, hands-on exercises from day one." },
    { icon: Briefcase, title: "Live Client Projects", desc: "Work on real briefs to build genuine professional experience." },
    { icon: Users, title: "1-on-1 Mentorship", desc: "Personal guidance from mentors who work in the industry." },
    { icon: Award, title: "Portfolio & Placement", desc: "Graduate with a portfolio and a dedicated placement plan." },
];
const reasons = [
    "Industry-expert trainers",
    "100% practical, project-based learning",
    "Live client projects & internships",
    "Dedicated placement assistance",
    "Affordable, flexible batches",
    "Lifetime learning community",
];
export default function AboutPage() {
    return (<>
      <PageHero eyebrow="Our Story" title="Building careers, not just courses" subtitle="Nexa Skills Hub was founded with one belief — that practical, industry-driven education is the fastest path to a great career."/>

      {/* Story */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
              From classrooms to <span className="text-gradient-orange">careers</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We started Nexa Skills Hub after seeing too many talented students graduate with
              certificates but no real-world skills. Traditional training focused on theory — we
              decided to flip the model entirely.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Today, we help thousands of learners become job-ready through hands-on projects, expert
              mentorship and end-to-end placement support. Our students don't just learn — they build,
              ship and get hired.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
            { icon: Users, value: "5,000+", label: "Students Trained", cls: "bg-gradient-orange text-primary-foreground" },
            { icon: Briefcase, value: "150+", label: "Hiring Partners", cls: "bg-muted text-navy" },
            { icon: Award, value: "92%", label: "Placement Rate", cls: "bg-gradient-navy text-navy-foreground" },
            { icon: GraduationCap, value: "20+", label: "Expert Mentors", cls: "bg-orange-light text-navy" },
        ].map((s) => (<div key={s.label} className={`rounded-3xl p-7 shadow-soft ${s.cls}`}>
                  <s.icon className="h-8 w-8 opacity-90"/>
                  <p className="mt-4 text-3xl font-bold">{s.value}</p>
                  <p className="text-sm opacity-80">{s.label}</p>
                </div>))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-background p-8 shadow-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-orange text-primary-foreground">
                <Target className="h-7 w-7"/>
              </span>
              <h3 className="mt-5 text-2xl font-bold text-navy">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To make every student truly job-ready by delivering practical, industry-aligned
                education backed by real projects, mentorship and genuine placement support.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-gradient-navy p-8 text-navy-foreground shadow-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Eye className="h-7 w-7"/>
              </span>
              <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/75">
                To become the most trusted skill-training institute — where practical learning bridges
                the gap between education and industry, and every learner finds a career they love.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Core Values" title="What we stand for"/>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (<Reveal key={v.title} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light text-primary">
                    <v.icon className="h-6 w-6"/>
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* Why choose + training method */}
      <section className="bg-orange-light px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Why Students Choose Us" title="A smarter way to become job-ready"/>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((r, i) => (<Reveal key={r} delay={(i % 2) * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl bg-background px-4 py-3 shadow-soft">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary"/>
                    <span className="text-sm font-medium text-navy">{r}</span>
                  </div>
                </Reveal>))}
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Our Training Method" title="How we teach"/>
            <div className="mt-8 space-y-4">
              {method.map((m, i) => (<Reveal key={m.title} delay={(i % 4) * 0.05}>
                  <div className="flex gap-4 rounded-2xl bg-background p-5 shadow-soft">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-orange text-primary-foreground">
                      <m.icon className="h-6 w-6"/>
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                </Reveal>))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentors / Infrastructure / Environment */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="The Nexa Experience" title="Built for real learning" subtitle="From mentors to infrastructure, everything is designed to help you thrive."/>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
            { icon: Users, title: "Industry Mentors", desc: "Learn directly from professionals working at top companies who bring real-world context to every session." },
            { icon: Building2, title: "Modern Infrastructure", desc: "Well-equipped labs, high-speed internet and collaborative spaces designed for focused, hands-on learning." },
            { icon: Sparkles, title: "Learning Environment", desc: "A supportive, energetic community where questions are welcome and growth is the shared goal." },
        ].map((c, i) => (<Reveal key={c.title} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-navy text-navy-foreground">
                    <c.icon className="h-7 w-7"/>
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* Career & Placement support banner */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-3xl bg-gradient-navy p-8 text-navy-foreground shadow-card sm:p-12 lg:grid-cols-2">
            <div>
              <Briefcase className="h-10 w-10 text-primary"/>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">Career Support</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/75">
                Resume building, LinkedIn optimization, mock interviews and 1-on-1 career guidance to
                prepare you for the job market.
              </p>
            </div>
            <div>
              <Rocket className="h-10 w-10 text-primary"/>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">Placement Support</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/75">
                Access to 150+ hiring partners, referral opportunities and continuous support until you
                land the right role.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <FaqSection />
      <CtaSection />
    </>);
}
