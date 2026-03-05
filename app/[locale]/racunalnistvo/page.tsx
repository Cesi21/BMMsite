import { getTranslations } from "next-intl/server"
import DomainPage from "@/components/DomainPage"

export default async function ITPage() {
  const t = await getTranslations("domains")

  return (
    <DomainPage
      title={t("it.title")}
      subtitle={t("it.subtitle")}
      servicesTitle={t("common.services")}
      projectsTitle={t("common.projects")}
      projectsText={t("common.projectsText")}
      contactTitle={t("common.contact")}
      contactText={t("common.contactText")}
      services={t.raw("it.services") as string[]}
      accent="it"
    />
  )
}
