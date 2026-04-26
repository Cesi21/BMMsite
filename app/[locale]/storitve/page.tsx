import { getTranslations } from "next-intl/server"
import PageHero from "@/components/PageHero"
import ServicesGrid from "@/components/ServicesGrid"
import InfoSection from "@/components/InfoSection"

export default async function ServicesPage() {
  const t = await getTranslations("pages.services")

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
      <ServicesGrid title={t("categoriesTitle")} items={t.raw("categories") as string[]} />
      <InfoSection title={t("approachTitle")} text={t("approachText")} />
    </div>
  )
}
