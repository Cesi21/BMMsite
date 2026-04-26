import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"

export default async function ITPage() {
  const t = await getTranslations("domains")

  return (
    <DomainPage
      accent="rgba(16,185,129,0.35)"
      eyebrow={t("common.eyebrow")}
      title={t("it.title")}
      subtitle={t("it.subtitle")}
      servicesTitle={t("common.services")}
      services={t.raw("it.services") as string[]}
      projectsTitle={t("common.projects")}
      projects={t.raw("it.projects") as { title: string; text: string }[]}
      processTitle={t("common.process")}
      processSteps={t.raw("it.process") as string[]}
      contactTitle={t("common.contact")}
      contactText={t("it.contact")}
      contactButton={t("common.contactCta")}
    />
  )
}
