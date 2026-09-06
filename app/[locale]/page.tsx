import type { Metadata } from "next"
import HeroTriangle from "@/components/HeroTriangle"
import MobileTiles from "@/components/MobileTiles"

import { createPageMetadata } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata(locale, "home")
}

export default function HomePage() {
  return (
    <section className="home-stage relative h-full overflow-hidden">
      <div className="ambient-grid pointer-events-none absolute inset-0" />
      <div className="relative h-full w-full px-2 py-2 sm:px-3 lg:px-4 lg:py-4">
        <div className="hidden h-full lg:block">
          <HeroTriangle />
        </div>

        <div className="h-full py-2 lg:hidden">
          <MobileTiles />
        </div>
      </div>
    </section>
  )
}
