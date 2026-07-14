import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
export function CtaSection({ title = "Ready To Start Your Career?", subtitle = "Book your free demo today and take the first step towards a job-ready future.", }) {
    return (<section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-orange px-6 py-16 text-center shadow-glow sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl"/>
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-navy/20 blur-3xl"/>
          <div className="relative">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/90 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="navy" size="xl">
                <Link to="/contact">
                  Book Your Free Demo <ArrowRight className="h-5 w-5"/>
                </Link>
              </Button>
              <Button asChild size="xl" className="border-2 border-white bg-transparent text-primary-foreground hover:bg-white hover:text-primary">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>);
}
