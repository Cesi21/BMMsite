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
    <section className="home-stage relative flex flex-1 flex-col">
      <div className="ambient-grid pointer-events-none absolute inset-0" />
      <div className="home-stage-inner relative mx-auto flex w-full flex-1 flex-col px-2 py-2 sm:px-3 lg:px-4 lg:py-4">
        <div className="hidden xl:block">
          <HeroTriangle />
        </div>

        <div className="flex flex-1 flex-col py-2 xl:hidden">
          <MobileTiles />
        </div>
      </div>
    </section>
  )
}
