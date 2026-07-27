import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"

export default async function ConstructionPage({ params }: { params: Promise<{ locale: string }> }) {
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
      projects={t.raw("construction.projects") as { title: string; text: string }[]}
      processTitle={t("common.process")}
      processSteps={t.raw("construction.process") as string[]}
      contactTitle={t("common.contact")}
      contactText={t("construction.contact")}
      contactButton={t("common.contactCta")}
    />
  )
}
