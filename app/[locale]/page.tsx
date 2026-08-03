import HeroTriangle from "@/components/HeroTriangle"
import MobileTiles from "@/components/MobileTiles"

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
