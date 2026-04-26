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
    <article className="rounded-3xl border border-white/10 bg-[rgba(18,22,30,0.62)] p-6" style={{ boxShadow: `inset 0 0 0 1px ${accent}` }}>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-white/75">{description}</p>
      <ul className="mt-5 space-y-2">
        {services.map((service) => (
          <li key={service} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85">
            {service}
          </li>
        ))}
      </ul>
      <Link href={href} className="mt-5 inline-flex text-sm font-medium text-white/90 underline-offset-4 hover:underline">
        {cta}
      </Link>
    </article>
  )
}
