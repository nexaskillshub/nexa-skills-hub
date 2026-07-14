import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background backdrop-blur-md shadow-soft" : "bg-[#ffffff]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-navy hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Book Free Demo</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-navy lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-l-0 bg-background p-0">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <SheetClose asChild>
                <button
                  aria-label="Close menu"
                  className="rounded-lg p-1.5 text-navy hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetClose>
            </div>
            <div className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <SheetClose asChild key={l.to}>
                  <Link
                    to={l.to}
                    className="rounded-xl px-4 py-3 text-base font-medium text-navy transition-colors hover:bg-accent hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild variant="hero" size="lg" className="mt-3">
                  <Link to="/contact">Book Free Demo</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
