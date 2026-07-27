import HeroTriangle from "@/components/HeroTriangle"
import MobileTiles from "@/components/MobileTiles"

export default function HomePage() {
  return (
    <section className="relative h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_38%)]" />

      <div className="relative mx-auto h-full w-full max-w-[1600px] px-3 py-3 sm:px-4 lg:px-5 lg:py-4">
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
