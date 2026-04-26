import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"

export default async function MechanicsPage() {
  const t = await getTranslations("domains")

  return (
    <DomainPage
      accent="rgba(59,130,246,0.35)"
      eyebrow={t("common.eyebrow")}
      title={t("mechanics.title")}
      subtitle={t("mechanics.subtitle")}
      servicesTitle={t("common.services")}
      services={t.raw("mechanics.services") as string[]}
      projectsTitle={t("common.projects")}
      projects={t.raw("mechanics.projects") as { title: string; text: string }[]}
      processTitle={t("common.process")}
      processSteps={t.raw("mechanics.process") as string[]}
      contactTitle={t("common.contact")}
      contactText={t("mechanics.contact")}
      contactButton={t("common.contactCta")}
    />
  )
}
