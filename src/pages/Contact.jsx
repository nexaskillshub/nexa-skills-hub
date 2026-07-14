import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { courses } from "@/data/courses";
const info = [
    { icon: Phone, title: "Call Us", value: " +91 9000288261", href: "tel: +919000288261" },
    {
        icon: Mail,
        title: "Email Us",
        value: "team@nexaskillshub.com",
        href: "mailto:team@nexaskillshub.com",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: `Nexdesk Coworking spaces`,
    },
    { icon: Clock, title: "Working Hours", value: "Mon - Sat, 9AM - 8PM" },
];
export default function ContactPage() {
    const [course, setCourse] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! Our team will reach out to you shortly.");
        e.target.reset();
        setCourse("");
    };
    return (<>
      <PageHero eyebrow="Contact Us" title="Let's start your career journey" subtitle="Book a free demo, ask about courses, fees and batches, or just say hello. Our team is ready to help."/>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Info */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Get in touch</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Have questions about a course or want to book a free demo? Reach out and we'll get
                back to you within 24 hours.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {info.map((item, i) => (<Reveal key={item.title} delay={(i % 2) * 0.05}>
                  <a href={item.href ?? "#"} className="flex h-full gap-2 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-orange text-primary-foreground">
                      <item.icon className="h-5 w-5"/>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy">{item.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                </Reveal>))}
            </div>
            <Reveal delay={0.1}>
              <a href="https://wa.me/919000288261?text=Hi%20Nexa%20Skills%20Hub!%20I%20want%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-4 rounded-2xl bg-gradient-navy p-5 text-navy-foreground shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5"/>
                </span>
                <div>
                  <p className="text-sm font-semibold">Chat on WhatsApp</p>
                  <p className="mt-0.5 text-sm text-navy-foreground/70">
                    Instant replies during working hours
                  </p>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-bold text-navy">Book Your Free Demo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and we'll take it from here.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="h-11 rounded-xl"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 ..." required className="h-11 rounded-xl"/>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@email.com" required className="h-11 rounded-xl"/>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Interested Course</Label>
                  <Select value={course} onValueChange={setCourse}>
                    <SelectTrigger className="h-11 w-full rounded-xl">
                      <SelectValue placeholder="Select a course"/>
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((c) => (<SelectItem key={c.slug} value={c.slug}>
                          {c.title}
                        </SelectItem>))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us what you'd like to know..." rows={4} className="rounded-xl"/>
                </div>
              </div>
              <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
                Send Message <Send className="h-5 w-5"/>
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>);
}
