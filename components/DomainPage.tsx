type Accent = "construction" | "mechanics" | "it"

type DomainPageProps = {
  title: string
  subtitle: string
  servicesTitle: string
  projectsTitle: string
  projectsText: string
  contactTitle: string
  contactText: string
  services: string[]
  accent: Accent
}

const accentStyles: Record<Accent, { glow: string; border: string }> = {
  construction: {
    glow: "from-[rgba(245,158,11,0.28)]",
    border: "border-[rgba(245,158,11,0.32)]"
  },
  mechanics: {
    glow: "from-[rgba(59,130,246,0.28)]",
    border: "border-[rgba(59,130,246,0.32)]"
  },
  it: {
    glow: "from-[rgba(16,185,129,0.28)]",
    border: "border-[rgba(16,185,129,0.32)]"
  }
}

export default function DomainPage({
  title,
  subtitle,
  servicesTitle,
  projectsTitle,
  projectsText,
  contactTitle,
  contactText,
  services,
  accent
}: DomainPageProps) {
  const tone = accentStyles[accent]

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <section className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-8 md:p-12`}>
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.glow} to-transparent`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),rgba(255,255,255,0)_42%)]" />
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.18em] text-white/55">BMM Cesar</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base text-white/72 md:text-lg">{subtitle}</p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className={`rounded-3xl border bg-[rgba(255,255,255,0.03)] p-6 ${tone.border}`}>
          <h2 className="text-2xl font-semibold tracking-tight">{servicesTitle}</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            {services.map((service) => (
              <li key={service} className="rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3">
                {service}
              </li>
            ))}
          </ul>
        </article>

        <div className="space-y-4">
          <article className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-6">
            <h2 className="text-2xl font-semibold tracking-tight">{projectsTitle}</h2>
            <p className="mt-4 text-white/75">{projectsText}</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-6">
            <h2 className="text-2xl font-semibold tracking-tight">{contactTitle}</h2>
            <p className="mt-4 text-white/75">{contactText}</p>
          </article>
        </div>
      </section>
    </div>
  )
}
