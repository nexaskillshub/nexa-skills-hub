import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Button } from "@/components/ui/button";
const categories = ["All", "Career Tips", "UI/UX", "Development", "Marketing", "Design"];
const posts = [
    {
        title: "How to Build a UI/UX Portfolio That Gets You Hired",
        excerpt: "Your portfolio matters more than your resume. Here's how to structure it to impress hiring managers.",
        category: "UI/UX",
        date: "Jul 2, 2026",
        read: "6 min read",
        featured: true,
    },
    {
        title: "7 In-Demand Skills to Learn in 2026",
        excerpt: "The job market is shifting fast. These are the skills employers are actively looking for right now.",
        category: "Career Tips",
        date: "Jun 24, 2026",
        read: "5 min read",
    },
    {
        title: "Frontend vs Full Stack: Which Path Should You Choose?",
        excerpt: "Confused about where to start in development? We break down both paths and who each suits best.",
        category: "Development",
        date: "Jun 18, 2026",
        read: "7 min read",
    },
    {
        title: "A Beginner's Guide to Digital Marketing Funnels",
        excerpt: "Understand how funnels turn strangers into customers, with real examples you can copy.",
        category: "Marketing",
        date: "Jun 10, 2026",
        read: "8 min read",
    },
    {
        title: "10 Figma Tips Every Designer Should Know",
        excerpt: "Speed up your workflow with these lesser-known Figma features used by professionals.",
        category: "Design",
        date: "Jun 3, 2026",
        read: "4 min read",
    },
    {
        title: "How to Ace Your First Tech Interview",
        excerpt: "From preparation to follow-up, here's a practical playbook to walk into interviews with confidence.",
        category: "Career Tips",
        date: "May 28, 2026",
        read: "6 min read",
    },
    {
        title: "Why Live Projects Beat Theory Every Time",
        excerpt: "Real work builds real skills. Here's why project-based learning accelerates your career.",
        category: "Career Tips",
        date: "May 20, 2026",
        read: "5 min read",
    },
];
export default function BlogPage() {
    const [featured, ...rest] = posts;
    return (<>
      <PageHero eyebrow="Blog" title="Insights to help you grow" subtitle="Career tips, skill guides and industry insights from our mentors — so you keep learning beyond the classroom."/>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* categories */}
          <Reveal className="flex flex-wrap gap-2">
            {categories.map((c, i) => (<span key={c} className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${i === 0
                ? "bg-gradient-orange text-primary-foreground"
                : "bg-muted text-navy hover:bg-orange-light hover:text-primary"}`}>
                {c}
              </span>))}
          </Reveal>

          {/* featured */}
          <Reveal className="mt-10">
            <div className="grid overflow-hidden rounded-3xl bg-gradient-navy text-navy-foreground shadow-card lg:grid-cols-2">
              <div className="relative min-h-[220px] bg-gradient-orange p-8">
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl"/>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Featured
                </span>
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {featured.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-navy-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4"/> {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4"/> {featured.read}
                  </span>
                </div>
                <Button variant="hero" size="lg" className="mt-6">
                  Read Article <ArrowRight className="h-4 w-4"/>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (<Reveal key={p.title} delay={(i % 3) * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="relative h-40 overflow-hidden bg-gradient-navy">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-orange opacity-80 transition-opacity duration-300 group-hover:opacity-100"/>
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4"/> {p.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4"/> {p.read}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>);
}
