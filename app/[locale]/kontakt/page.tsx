import { getTranslations } from "next-intl/server"
import PageHero from "@/components/PageHero"
import CTAContact from "@/components/CTAContact"
import InfoSection from "@/components/InfoSection"

export default async function ContactPage() {
  const t = await getTranslations("pages.contact")

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
      <InfoSection title={t("detailsTitle")} text={t("detailsText")} />
      <CTAContact title={t("ctaTitle")} text={t("ctaText")} button={t("ctaButton")} />
    </div>
  )
}
