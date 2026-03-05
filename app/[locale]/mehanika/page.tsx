import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"

export default async function MechanicsPage() {
  const t = await getTranslations("domains")

  return (
    <DomainPage
      title={t("mechanics.title")}
      subtitle={t("mechanics.subtitle")}
      servicesTitle={t("common.services")}
      projectsTitle={t("common.projects")}
      projectsText={t("common.projectsText")}
      contactTitle={t("common.contact")}
      contactText={t("common.contactText")}
      services={t.raw("mechanics.services") as string[]}
      accent="mechanics"
    />
  )
}
