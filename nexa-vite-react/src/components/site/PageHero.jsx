import { Reveal } from "./Reveal";
export function PageHero({ eyebrow, title, subtitle, }) {
    return (<section className="relative overflow-hidden bg-gradient-navy pt-32 pb-20 text-navy-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"/>
      <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"/>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>);
}
