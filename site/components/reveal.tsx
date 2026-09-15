"use client"

import { useEffect, useRef, type ReactNode } from "react"

/*
  Reveal — scroll-in blur/fade, rebuilt from the Magic UI "blur-fade" pattern
  (hidden: opacity 0 + 6px offset + 6px blur → visible, ease-out, once).
  Differences on purpose:
  - No `motion` dependency: IntersectionObserver + CSS transitions on tokens
    (--motion-reveal, --reveal-offset, --reveal-blur, --motion-ease-out).
  - No-JS safe: nothing is hidden in the server HTML. The hidden state is applied
    only after hydration, and only to elements still below the fold, so content is
    never missing for crawlers and never flashes above the fold.
  - prefers-reduced-motion: the CSS disables the transition; elements just appear.
*/
type Tag = "div" | "li" | "figure" | "section"

export function Reveal({ children, as = "div", delay = 0, className }: { children: ReactNode; as?: Tag; delay?: number; className?: string }) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const rect = el.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight * 0.92
    if (alreadyVisible) return

    el.dataset.reveal = "hidden"
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`
            el.dataset.reveal = "visible"
            io.disconnect()
          }
        }
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  const Tag = as as "div"
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  )
}
