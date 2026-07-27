import Link from "next/link"

type BranchCardProps = {
  title: string
  description: string
  services: string[]
  cta: string
  href: string
  accent: string
}

export default function BranchCard({ title, description, services, cta, href, accent }: BranchCardProps) {
  return (
    <article className="surface-panel rounded-3xl border p-6" style={{ boxShadow: `inset 0 0 0 1px ${accent}` }}>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="muted-text mt-3">{description}</p>
      <ul className="mt-5 space-y-2">
        {services.map((service) => (
          <li key={service} className="surface-subtle rounded-xl border px-3 py-2 text-sm">
            {service}
          </li>
        ))}
      </ul>
      <Link href={href} className="mt-5 inline-flex text-sm font-medium underline-offset-4 hover:underline">
        {cta}
      </Link>
    </article>
  )
}
