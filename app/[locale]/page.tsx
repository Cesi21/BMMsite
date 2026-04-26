import HeroTriangle from "@/components/HeroTriangle"
import MobileTiles from "@/components/MobileTiles"

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.14),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.12),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_40%)]" />

      <div className="relative mx-auto grid min-h-[calc(100dvh-72px)] w-full max-w-7xl gap-6 px-4 py-6 md:px-6 md:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <HeroTriangle />

        <div className="lg:hidden">
          <MobileTiles />
        </div>
      </div>
    </section>
  )
}
