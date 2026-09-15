import { Plus } from "lucide-react"

import type { Faq } from "@/lib/site"

/* FAQ — native <details>, server-rendered; the text matches the FAQPage schema exactly. */
export function FaqSection({ faqs, title = "Questions people ask before booking", id = "faq" }: { faqs: Faq[]; title?: string; id?: string }) {
  return (
    <section id={id} className="section-y bg-background" aria-labelledby={`${id}-title`}>
      <div className="container-c3 grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow mb-3 text-muted-foreground">FAQ</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <div className="md:col-span-8">
          {faqs.map((f) => (
            <details key={f.question} className="faq-item group">
              <summary className="flex items-start justify-between gap-6 py-5">
                <span className="text-h4 font-semibold">{f.question}</span>
                <Plus className="faq-icon mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              </summary>
              <p className="measure pb-6 text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
