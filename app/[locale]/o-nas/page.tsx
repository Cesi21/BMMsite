import { getTranslations } from "next-intl/server"
import InfoSection from "@/components/InfoSection"
import PageHero from "@/components/PageHero"

export default async function AboutPage() {
  const t = await getTranslations("pages.about")

  return (
    <div className="about-page page-shell space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
      <div className="about-story-grid grid gap-6 lg:grid-cols-3">
        <InfoSection title={t("missionTitle")} text={t("missionText")} tone="construction" />
        <InfoSection title={t("storyTitle")} text={t("storyText")} tone="mechanics" />
        <InfoSection title={t("teamTitle")} text={t("teamText")} tone="it" />
      </div>
    </div>
  )
}
