import { getTranslations } from "next-intl/server"
import BranchCard from "@/components/BranchCard"
import InfoSection from "@/components/InfoSection"
import PageHero from "@/components/PageHero"

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations("pages.services")
  const branches = t.raw("branches") as { title: string; description: string; services: string[]; cta: string; path: string; accent: string }[]

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
      <section className="grid gap-4 lg:grid-cols-3">
        {branches.map((branch) => (
          <BranchCard
            key={branch.title}
            title={branch.title}
            description={branch.description}
            services={branch.services}
            cta={branch.cta}
            href={`/${locale}/${branch.path}`}
            accent={branch.accent}
          />
        ))}
      </section>
      <InfoSection title={t("approachTitle")} text={t("approachText")} />
    </div>
  )
}
