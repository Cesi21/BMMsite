import Link from "next/link"

type BranchCardProps = {
  title: string
  description: string
  services: string[]
  cta: string
  href: string
  accent: string
  tone: "construction" | "mechanics" | "it"
}

export default function BranchCard({ title, description, services, cta, href, accent, tone }: BranchCardProps) {
  return (
    <article className="branch-card surface-panel group relative overflow-hidden rounded-3xl border p-6" data-tone={tone} style={{ boxShadow: `inset 0 0 0 1px ${accent}` }}>
      <span className="branch-card-glow" aria-hidden />
      <span className="branch-card-line" aria-hidden />
      <h3 className="relative text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
      <p className="muted-text relative mt-3 leading-relaxed">{description}</p>
      <ul className="mt-5 space-y-2">
        {services.map((service) => (
          <li key={service} className="branch-service surface-subtle relative rounded-xl border px-3 py-2 text-sm">
            {service}
          </li>
        ))}
      </ul>
      <Link href={href} className="branch-cta relative mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        {cta}
        <span aria-hidden>↗</span>
      </Link>
    </article>
  )
}
