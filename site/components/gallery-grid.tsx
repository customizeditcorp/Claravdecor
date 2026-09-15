import Image from "next/image"

import { photoSrc, type Photo } from "@/lib/photos"
import { cn } from "@/lib/utils"

/*
  Gallery — visual proof treated as a component, not a global axis (design config §3):
  4:5 tiles, 2/3/4 columns, gap --space-2, no radius, no border, hover opacity .92.
  Every image is in the initial HTML with its real alt. `small` sources stay thumbnails.
*/
export function GalleryGrid({ photos, columns = 4, priorityCount = 0, className }: { photos: Photo[]; columns?: 3 | 4; priorityCount?: number; className?: string }) {
  const sizes = columns === 4
    ? "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
    : "(min-width: 768px) 33vw, 50vw"
  return (
    <ul className={cn("grid grid-cols-2 gap-2 md:grid-cols-3", columns === 4 && "xl:grid-cols-4", className)}>
      {photos.map((p, i) => (
        <li key={p.file} className="gallery-tile">
          <Image
            src={photoSrc(p)}
            alt={p.alt}
            fill
            sizes={sizes}
            priority={i < priorityCount}
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  )
}
