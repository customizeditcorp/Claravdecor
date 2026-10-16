import Link from "next/link"

import { processSteps, cta } from "@/lib/site"
import { Reveal } from "@/components/reveal"

/*
  "How it works" — the Craft/Method reinforcement. Editorial density (1.5× section padding),
  two columns, step number in Playfair 56px weight 400 (Playfair ships no 300),
  1px hairlines between steps, no cards, no icons. Mockup is its own step.
*/
export function ProcessSteps({ compact = false }: { compact?: boolean }) {
  return (
    <section id="how-it-works" className={`${compact ? "section-y" : "section-y-editorial"} bg-background`} aria-labelledby="process-title">
      <div className="container-c3 grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <p className="eyebrow mb-3 text-muted-foreground">Our process</p>
            <h2 id="process-title">How does booking with ClaravDecor work?</h2>
            <p className="lead mt-5 text-muted-foreground">
              In five steps: tell us your idea, we read your space, you lock in your date, we design it and show you a mockup, and we set up and take down. Every design starts with your actual space and ends with a mockup you approve before we build anything.
            </p>
            <Link href={cta.primary.href} className="btn btn-primary mt-8">{cta.primary.label}</Link>
          </div>
        </div>
        <ol className="md:col-span-7">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-8 last:border-b md:gap-10 md:py-10">
              <span className="font-display text-[3.5rem] font-normal leading-none text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="subtitle">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{step.body}</p>
                {/* [TO CONFIRM] real mockup example image slot — intentionally hidden until it exists (doc 11 §11). */}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
