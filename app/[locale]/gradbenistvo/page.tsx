import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"
import type { ProjectItem } from "@/components/ProjectGrid"
import { createPageMetadata } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata(locale, "construction")
}

export default async function ConstructionPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations("domains")

  return (
    <DomainPage
      locale={locale}
      accent="rgba(245,158,11,0.35)"
      eyebrow={t("common.eyebrow")}
      title={t("construction.title")}
      subtitle={t("construction.subtitle")}
      servicesTitle={t("common.services")}
      services={t.raw("construction.services") as string[]}
      projectsTitle={t("common.projects")}
      projectSampleLabel={t("common.sampleProject")}
      projectResultLabel={t("common.result")}
      projects={t.raw("construction.projects") as ProjectItem[]}
      processTitle={t("common.process")}
      processSteps={t.raw("construction.process") as string[]}
      contactTitle={t("common.contact")}
      contactText={t("construction.contact")}
      contactButton={t("common.contactCta")}
    />
  )
}
