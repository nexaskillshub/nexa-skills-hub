import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
const columns = [
    {
        title: "Quick Links",
        links: [
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Courses", to: "/courses" },
            { label: "Blog", to: "/blog" },
            { label: "Contact", to: "/contact" },
        ],
    },
    {
        title: "Courses",
        links: [
            { label: "UI/UX Design", to: "/courses/ui-ux-design" },
            { label: "Graphic Design", to: "/courses/graphic-design" },
            { label: "Full Stack Development", to: "/courses/full-stack-development" },
            { label: "Digital Marketing", to: "/courses/digital-marketing" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", to: "/about" },
            { label: "Contact", to: "/contact" },
            { label: "Privacy Policy", to: "/contact" },
            { label: "Terms", to: "/contact" },
        ],
    },
];
const socials = [
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/company/nexa-skills-hub" },
    { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/nexa_skills_hub" },
    { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/share/14mKriXiLEa/" },
];
export function Footer() {
    return (<footer className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-background/95 px-4 py-3 inline-block">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              A career-focused training institute helping students become job-ready through
              practical learning, real-world projects, mentorship and placement assistance.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-navy-foreground/80">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary"/> +91 9000288261
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary"/> team@nexaskillshub.com
              </p>
              <p className="flex items-center gap-3 w-[100%]">
                <MapPin className="h-4 w-8 text-primary"/> Nexdesk Coworking spaces, 6th floor,
                B-609, B Block, Asian Suncity, Behind AMB Mall, Kondapur, Hyderabad, Telangana
                500084
              </p>
            </div>
          </div>

          {columns.map((col) => (<div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (<li key={l.label}>
                    <Link to={l.to} className="text-sm text-navy-foreground/70 transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>))}
              </ul>
            </div>))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-navy-foreground/60">
            © {new Date().getFullYear()} Nexa Skills Hub. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (<a key={s.label} href={s.link} aria-label={s.label} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1">
                <s.icon className="h-4 w-4"/>
              </a>))}
          </div>
        </div>
      </div>
    </footer>);
}
