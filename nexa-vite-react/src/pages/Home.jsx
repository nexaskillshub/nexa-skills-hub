import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Phone, GraduationCap, Hammer, Rocket, Users, Award, Briefcase, FileText, MessageSquareText, Compass, BadgeCheck, Wallet, Infinity as InfinityIcon, Laptop, Star, Quote, Linkedin, CheckCircle2, Sparkles, } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaSection } from "@/components/site/CtaSection";
const whyChoose = [
    { icon: Users, title: "Industry Expert Trainers" },
    { icon: Hammer, title: "100% Practical Training" },
    { icon: Briefcase, title: "Live Client Projects" },
    { icon: FileText, title: "Portfolio Building" },
    { icon: Rocket, title: "Placement Assistance" },
    { icon: GraduationCap, title: "Internship Support" },
    { icon: FileText, title: "Resume Building" },
    { icon: MessageSquareText, title: "Mock Interviews" },
    { icon: Compass, title: "Career Guidance" },
    { icon: Wallet, title: "Affordable Fees" },
    { icon: BadgeCheck, title: "Industry Certifications" },
    { icon: InfinityIcon, title: "Lifetime Learning Community" },
];
const journey = [
    "Enroll",
    "Learn",
    "Practice",
    "Live Projects",
    "Portfolio",
    "Placement Assistance",
    "Get Hired",
];
const projects = [
    "Website Design",
    "Mobile App UI",
    "Logo Design",
    "Social Media Design",
    "Landing Pages",
    "Dashboards",
    "Brand Identity",
];
const placement = [
    { icon: FileText, title: "Resume Building", desc: "Craft an ATS-friendly resume that gets shortlisted." },
    { icon: Briefcase, title: "Portfolio Review", desc: "Polish your projects into a hire-worthy portfolio." },
    { icon: Linkedin, title: "LinkedIn Optimization", desc: "Build a profile that attracts recruiters." },
    { icon: MessageSquareText, title: "Interview Preparation", desc: "Technical and behavioural interview readiness." },
    { icon: Users, title: "Mock Interviews", desc: "Real interview simulations with expert feedback." },
    { icon: Award, title: "HR Preparation", desc: "Salary negotiation and HR round confidence." },
    { icon: Compass, title: "Career Guidance", desc: "1-on-1 mentorship to map your career path." },
];
const testimonials = [
    {
        name: "Aarav Mehta",
        role: "UI/UX Designer @ Fintech Startup",
        text: "The live projects and mentorship completely changed how I design. I built a portfolio that landed me a job within a month of finishing.",
        stars: 5,
    },
    {
        name: "Sara Khan",
        role: "Full Stack Developer",
        text: "From zero coding to building full apps — the practical approach at Nexa is unmatched. The placement team was with me every step.",
        stars: 5,
    },
    {
        name: "Rahul Verma",
        role: "Digital Marketer",
        text: "Real campaigns, real budgets, real results. I cracked my interview because I could show actual work I'd done during the course.",
        stars: 5,
    },
];
const stats = [
    { value: "5,000+", label: "Students Trained" },
    { value: "92%", label: "Placement Rate" },
    { value: "150+", label: "Hiring Partners" },
    { value: "4.9/5", label: "Student Rating" },
];
export default function Index() {
    return (<>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-16 lg:pt-32">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"/>
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-navy/10 blur-3xl"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="h-4 w-4"/> Industry-Ready Skill Training
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
                Build Your Career with{" "}
                <span className="text-gradient-orange">Industry-Ready Skills</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Learn practical skills from industry experts through live projects, portfolio
                building, internships, and placement assistance.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="h-5 w-5"/>
                  </Link>
                </Button>
                <Button asChild variant="navy" size="xl">
                  <Link to="/contact">
                    <PlayCircle className="h-5 w-5"/> Book Free Demo
                  </Link>
                </Button>
                <Button asChild variant="outlineNavy" size="xl">
                  <Link to="/contact">
                    <Phone className="h-5 w-5"/> Contact Us
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (<div key={s.label}>
                    <p className="text-2xl font-bold text-navy">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-orange opacity-20 blur-2xl"/>
            <img src={heroImg} alt="Nexa Skills Hub student holding a laptop surrounded by learning technology" width={1408} height={1200} className="w-full rounded-[2rem] shadow-card"/>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-4 bottom-10 hidden items-center gap-3 rounded-2xl bg-background px-4 py-3 shadow-card sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-orange text-primary-foreground">
                <Award className="h-5 w-5"/>
              </span>
              <div>
                <p className="text-sm font-bold text-navy">Certified</p>
                <p className="text-xs text-muted-foreground">Industry recognized</p>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-3 top-8 hidden items-center gap-3 rounded-2xl bg-navy px-4 py-3 text-navy-foreground shadow-card sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Laptop className="h-5 w-5"/>
              </span>
              <div>
                <p className="text-sm font-bold">Live Projects</p>
                <p className="text-xs text-navy-foreground/70">Real client work</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — ABOUT */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl bg-gradient-navy p-6 text-navy-foreground shadow-soft">
                  <GraduationCap className="h-8 w-8 text-primary"/>
                  <p className="mt-4 text-3xl font-bold">100%</p>
                  <p className="text-sm text-navy-foreground/70">Practical Learning</p>
                </div>
                <div className="rounded-3xl bg-orange-light p-6 shadow-soft">
                  <Briefcase className="h-8 w-8 text-primary"/>
                  <p className="mt-4 text-3xl font-bold text-navy">150+</p>
                  <p className="text-sm text-muted-foreground">Hiring Partners</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl bg-gradient-orange p-6 text-primary-foreground shadow-soft">
                  <Users className="h-8 w-8"/>
                  <p className="mt-4 text-3xl font-bold">5K+</p>
                  <p className="text-sm text-primary-foreground/90">Students Trained</p>
                </div>
                <div className="rounded-3xl bg-muted p-6 shadow-soft">
                  <Award className="h-8 w-8 text-primary"/>
                  <p className="mt-4 text-3xl font-bold text-navy">92%</p>
                  <p className="text-sm text-muted-foreground">Placement Rate</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="About Nexa Skills Hub" title={<>
                  Learn. <span className="text-gradient-orange">Build.</span> Grow.
                </>}/>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Nexa Skills Hub is a career-focused training institute dedicated to helping students
                become job-ready through practical learning, real-world projects, expert mentorship,
                and placement assistance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Unlike traditional training institutes, our programs focus on hands-on experience and
                industry requirements — so you graduate with a portfolio, not just a certificate.
              </p>
              <div className="mt-8">
                <Button asChild variant="hero" size="lg">
                  <Link to="/about">
                    Read More <ArrowRight className="h-4 w-4"/>
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY CHOOSE US */}
      <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Choose Us" title="Everything you need to become job-ready" subtitle="A complete ecosystem built around your career growth — from your first lesson to your first offer letter."/>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {whyChoose.map((item, i) => (<Reveal key={item.title} delay={(i % 4) * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light text-primary transition-colors duration-300 group-hover:bg-gradient-orange group-hover:text-primary-foreground">
                    <item.icon className="h-6 w-6"/>
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-navy">{item.title}</h3>
                </div>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — COURSES */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Courses" title="Premium, career-focused programs" subtitle="Hands-on courses designed with industry experts to make you truly job-ready."/>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => (<Reveal key={course.slug} delay={(i % 4) * 0.05}>
                <CourseCard course={course}/>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — LEARNING JOURNEY */}
      <section className="bg-gradient-navy px-4 py-20 text-navy-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading light eyebrow="Learning Journey" title="Your path from beginner to hired" subtitle="A proven step-by-step journey that turns learners into confident professionals."/>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, i) => (<Reveal key={step} delay={(i % 4) * 0.05}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-orange text-lg font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{step}</h3>
                </div>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — STUDENT PROJECTS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Student Projects" title="Real work, real portfolios" subtitle="Our students don't just learn — they build. Here's a glimpse of what they create."/>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {projects.map((p, i) => (<Reveal key={p} delay={(i % 4) * 0.05} className={i === 0 ? "lg:row-span-2 lg:col-span-2" : ""}>
                <div className={`group relative flex h-full min-h-[140px] items-end overflow-hidden rounded-3xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${i % 3 === 0 ? "bg-gradient-orange text-primary-foreground" : i % 3 === 1 ? "bg-gradient-navy text-navy-foreground" : "bg-orange-light text-navy"}`}>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-150"/>
                  <div className="relative">
                    <Sparkles className="mb-3 h-6 w-6 opacity-80"/>
                    <h3 className="text-lg font-bold">{p}</h3>
                  </div>
                </div>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PLACEMENT ASSISTANCE */}
      <section className="bg-orange-light px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Placement Assistance" title="We don't stop at teaching" subtitle="Dedicated career support to help you land the right job — end to end."/>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placement.map((item, i) => (<Reveal key={item.title} delay={(i % 3) * 0.05}>
                <div className="flex h-full gap-4 rounded-2xl bg-background p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-orange text-primary-foreground">
                    <item.icon className="h-6 w-6"/>
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Reveal>))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Student Testimonials" title="Success stories that inspire" subtitle="Video reviews, Google reviews and real success stories from our community."/>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (<Reveal key={t.name} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <Quote className="h-8 w-8 text-primary/30"/>
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, s) => (<Star key={s} className="h-4 w-4 fill-primary text-primary"/>))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-navy text-sm font-bold text-navy-foreground">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>))}
          </div>
          <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-8 rounded-3xl bg-muted px-6 py-8">
            <div className="flex items-center gap-3">
              <PlayCircle className="h-8 w-8 text-primary"/>
              <span className="text-sm font-semibold text-navy">120+ Video Reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 fill-primary text-primary"/>
              <span className="text-sm font-semibold text-navy">4.9/5 on Google Reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-primary"/>
              <span className="text-sm font-semibold text-navy">3,000+ Success Stories</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <FaqSection />

      {/* SECTION 10 — CTA */}
      <CtaSection />
    </>);
}
