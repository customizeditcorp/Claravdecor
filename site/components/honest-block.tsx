import { Check, Info } from "lucide-react"

import { honest } from "@/lib/site"

/*
  "What we handle, and what we don't" — the only dark surface in the body (design config §3).
  --secondary background, ivory text, Warm Taupe accents, two flat columns.
*/
export function HonestBlock() {
  return (
    <section id="what-we-handle" className="section-y bg-secondary text-secondary-foreground" aria-labelledby="honest-title">
      <div className="container-c3">
        <p className="eyebrow mb-3 text-accent">What we handle, and what we don&apos;t</p>
        <h2 id="honest-title" className="max-w-3xl text-secondary-foreground">{honest.heading}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="!text-h4 !font-sans !font-semibold text-secondary-foreground">We handle</h3>
            <ul className="mt-5 space-y-4">
              {honest.handle.map((item) => (
                <li key={item} className="flex gap-3 border-t border-secondary-foreground/15 pt-4 text-secondary-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="!text-h4 !font-sans !font-semibold text-secondary-foreground">We&apos;re upfront about</h3>
            <ul className="mt-5 space-y-4">
              {honest.upfront.map((item) => (
                <li key={item} className="flex gap-3 border-t border-secondary-foreground/15 pt-4 text-secondary-muted">
                  <Info className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-3xl border-l-2 border-accent pl-6">
          <p className="lead text-secondary-foreground">{honest.commitment}</p>
          {honest.commitmentPending && (
            <p className="pending-note mt-3 text-caption text-accent" data-pending="guarantee-wording">
              [Final wording pending Clara&apos;s written confirmation — own cause + time window]
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
