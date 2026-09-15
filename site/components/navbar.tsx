"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone } from "lucide-react"

import { business, cta, nav } from "@/lib/site"
import { cn } from "@/lib/utils"

/*
  Header — design config §3: solid --background, lockup taupe, 72px, one CTA, no announcement bar.
  All links are in the initial HTML; state only toggles visibility of the mobile panel.
*/
export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isService = nav.services.some((s) => pathname === s.href)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container-c3">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label={`${business.name} — home`} className="shrink-0">
            <Image
              src="/brand/clarav-lockup-horizontal-taupe.svg"
              alt={`${business.name} ${business.descriptor}`}
              width={192}
              height={64}
              priority
              className="h-14 w-auto md:h-16"
            />
          </Link>

          {/* Desktop nav — small caps with tracking, the lockup's EVENT DECOR gesture */}
          <nav className="hidden items-center gap-0 lg:flex xl:gap-1" aria-label="Main navigation">
            <NavLink href="/gallery" label="Gallery" active={pathname === "/gallery"} />

            <div className="group relative">
              <Link
                href="/full-event-design"
                className={cn(navLinkClass, isService && "text-primary")}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-0 top-full w-64 rounded-lg border border-border bg-card p-2 opacity-0 shadow-card transition-all duration-base group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {nav.services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={cn(
                      "nav-link-type block rounded-md px-3 py-2.5 transition-colors hover:bg-muted",
                      pathname === s.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {nav.main.filter((m) => m.href !== "/gallery").map((m) => (
              <NavLink key={m.href} href={m.href} label={m.label} active={pathname === m.href} />
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <a href={business.phoneHref} className="hidden items-center gap-2 whitespace-nowrap text-caption font-medium text-foreground hover:text-primary 2xl:flex">
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {business.phone}
            </a>
            <Link href={cta.primary.href} className="btn btn-primary whitespace-nowrap !min-h-[44px] !px-5 !py-2.5">
              {cta.primary.label}
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile nav: always in the DOM (crawlable), toggled with a class */}
      <nav id="mobile-nav" className={cn("border-t border-border bg-background lg:hidden", open ? "block" : "hidden")} aria-label="Mobile navigation">
        <div className="container-c3 space-y-1 py-4">
          <MobileLink href="/gallery" label="Gallery" active={pathname === "/gallery"} />
          <p className="eyebrow px-3 pb-1 pt-3 text-muted-foreground">Services</p>
          {nav.services.map((s) => (
            <MobileLink key={s.href} href={s.href} label={s.label} active={pathname === s.href} nested />
          ))}
          <div className="pt-2">
            {nav.main.filter((m) => m.href !== "/gallery").map((m) => (
              <MobileLink key={m.href} href={m.href} label={m.label} active={pathname === m.href} />
            ))}
          </div>
          <div className="space-y-3 border-t border-border pt-4">
            <a href={business.phoneHref} className="flex items-center gap-2 px-3 text-caption font-medium text-foreground">
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              Text or call {business.phone}
            </a>
            <Link href={cta.primary.href} className="btn btn-primary w-full">
              {cta.primary.label}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

const navLinkClass =
  "nav-link-type inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 transition-colors hover:text-primary xl:px-3"

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className={cn(navLinkClass, active ? "text-primary" : "text-foreground")} aria-current={active ? "page" : undefined}>
      {label}
    </Link>
  )
}

function MobileLink({ href, label, active, nested }: { href: string; label: string; active: boolean; nested?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "nav-link-type block rounded-md px-3 py-2.5 !text-[1.125rem] transition-colors",
        nested && "pl-6",
        active ? "text-primary" : "text-foreground hover:bg-muted"
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  )
}
