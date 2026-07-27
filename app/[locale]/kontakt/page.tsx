import { getTranslations } from "next-intl/server"
import CTAContact from "@/components/CTAContact"
import ContactDetails from "@/components/ContactDetails"
import PageHero from "@/components/PageHero"
import ServicesGrid from "@/components/ServicesGrid"

export default async function ContactPage() {
  const t = await getTranslations("pages.contact")

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
      <div className="grid gap-6 lg:grid-cols-2">
        <ContactDetails
          title={t("detailsTitle")}
          intro={t("detailsText")}
          emailLabel={t("labels.email")}
          phoneLabel={t("labels.phone")}
          locationLabel={t("labels.location")}
          email={t("email")}
          phone={t("phone")}
          location={t("location")}
          hours={t("hours")}
        />
        <ServicesGrid title={t("branchTitle")} items={t.raw("branches") as string[]} />
      </div>
      <CTAContact title={t("ctaTitle")} text={t("ctaText")} button={t("ctaButton")} href={`mailto:${t("email")}`} />
    </div>
  )
}
