import Link from "next/link"

export type Crumb = { name: string; path: string }

export function Breadcrumbs({ items, onDark }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-caption ${onDark ? "text-secondary-muted" : "text-muted-foreground"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={onDark ? "text-secondary-foreground" : "text-foreground"}>{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:underline underline-offset-4">{item.name}</Link>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
