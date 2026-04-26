import { getTranslations } from "next-intl/server"
import PageHero from "@/components/PageHero"
import InfoSection from "@/components/InfoSection"

export default async function AboutPage() {
  const t = await getTranslations("pages.about")

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
      <InfoSection title={t("missionTitle")} text={t("missionText")} />
      <InfoSection title={t("storyTitle")} text={t("storyText")} />
      <InfoSection title={t("teamTitle")} text={t("teamText")} />
    </div>
  )
}
