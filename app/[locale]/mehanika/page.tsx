import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"
import type { ProjectItem } from "@/components/ProjectGrid"
import { createPageMetadata } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata(locale, "mechanics")
}

export default async function MechanicsPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations("domains")

  return (
    <DomainPage
      locale={locale}
      accent="rgba(59,130,246,0.35)"
      eyebrow={t("common.eyebrow")}
      title={t("mechanics.title")}
      subtitle={t("mechanics.subtitle")}
      servicesTitle={t("common.services")}
      services={t.raw("mechanics.services") as string[]}
      projectsTitle={t("common.projects")}
      projectSampleLabel={t("common.sampleProject")}
      projectResultLabel={t("common.result")}
      projects={t.raw("mechanics.projects") as ProjectItem[]}
      processTitle={t("common.process")}
      processSteps={t.raw("mechanics.process") as string[]}
      contactTitle={t("common.contact")}
      contactText={t("mechanics.contact")}
      contactButton={t("common.contactCta")}
    />
  )
}
