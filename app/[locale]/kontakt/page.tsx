import { getLocale, getTranslations } from "next-intl/server"
import ContactForm from "@/components/ContactForm"
import ContactDetails from "@/components/ContactDetails"
import PageHero from "@/components/PageHero"

export default async function ContactPage() {
  const [t, locale] = await Promise.all([
    getTranslations("pages.contact"),
    getLocale(),
  ])

  return (
    <div className="page-shell space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
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
      <ContactForm
        locale={locale}
        title={t("ctaTitle")}
        intro={t("ctaText")}
        labels={{
          email: t("form.email"),
          emailPlaceholder: t("form.emailPlaceholder"),
          phone: t("form.phone"),
          phonePlaceholder: t("form.phonePlaceholder"),
          area: t("form.area"),
          subject: t("form.subject"),
          subjectPlaceholder: t("form.subjectPlaceholder"),
          message: t("form.message"),
          messagePlaceholder: t("form.messagePlaceholder"),
          consent: t("form.consent"),
          submit: t("form.submit"),
          sending: t("form.sending"),
          success: t("form.success"),
          error: t("form.error"),
        }}
        areas={{
          general: t("form.areas.general"),
          construction: t("form.areas.construction"),
          mechanics: t("form.areas.mechanics"),
          it: t("form.areas.it"),
        }}
      />
    </div>
  )
}
