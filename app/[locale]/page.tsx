import HeroTriangle from "@/components/HeroTriangle"
import MobileTiles from "@/components/MobileTiles"

export default function HomePage() {
  return (
    <section className="h-[calc(100dvh-72px)] overflow-hidden">
      <div className="hidden h-full md:block">
        <HeroTriangle />
      </div>
      <div className="h-full px-4 py-4 md:hidden">
        <MobileTiles />
      </div>
    </section>
  )
}
