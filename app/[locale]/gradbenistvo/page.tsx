import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"

export default async function ConstructionPage() {
  const t = await getTranslations("domains")

  return (
    <DomainPage
      title={t("construction.title")}
      subtitle={t("construction.subtitle")}
      servicesTitle={t("common.services")}
      projectsTitle={t("common.projects")}
      projectsText={t("common.projectsText")}
      contactTitle={t("common.contact")}
      contactText={t("common.contactText")}
      services={t.raw("construction.services") as string[]}
      accent="construction"
    />
  )
}
