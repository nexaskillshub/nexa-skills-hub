import { Link } from "react-router-dom";
import { ArrowRight, Clock, BarChart3, PenTool, Palette, Code2, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/courses";

const icons: Record<string, LucideIcon> = { PenTool, Palette, Code2, TrendingUp };

export function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon] ?? PenTool;
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-card">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
          course.color === "orange"
            ? "bg-gradient-orange text-primary-foreground"
            : "bg-gradient-navy text-navy-foreground"
        }`}
      >
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-navy">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>

      <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-navy/70">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-primary" /> {course.duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BarChart3 className="h-4 w-4 text-primary" /> {course.level}
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <Button asChild variant="outlineNavy" size="lg" className="flex-1">
          <Link to={`/courses/${course.slug}`}>
            Learn More
          </Link>
        </Button>
        <Button asChild variant="hero" size="lg" className="flex-1">
          <Link to="/contact">
            Enroll Now <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}