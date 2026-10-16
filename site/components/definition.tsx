/* Answer-first definition block — the paragraph an answer engine quotes (design config §7 AEO pass). */
export function Definition({ children, id = "definition" }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="bg-background py-10 md:py-14" aria-label="About this service">
      <div className="container-c3">
        <p className="lead max-w-4xl">{children}</p>
      </div>
    </section>
  )
}
