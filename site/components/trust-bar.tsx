import { trustFacts } from "@/lib/site"

/* Flat row under the hero, caption size, --border separators. Verifiable facts only. */
export function TrustBar() {
  return (
    <section aria-label="What every booking includes" className="border-b border-border bg-card">
      <div className="container-c3">
        <ul className="grid grid-cols-2 divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
          {trustFacts.map((fact) => (
            <li key={fact} className="px-4 py-4 text-center text-caption font-medium text-foreground md:py-5">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
