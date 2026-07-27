import { getTranslations } from "next-intl/server"
import CTAContact from "@/components/CTAContact"
import PageHero from "@/components/PageHero"
import ProcessSteps from "@/components/ProcessSteps"
import ProjectGrid from "@/components/ProjectGrid"
import ServicesGrid from "@/components/ServicesGrid"

type Project = {
  title: string
  description: string
}

type Step = {
  title: string
  description: string
}

export default async function MechanicsPage() {
  const t = await getTranslations("domains")
  const services = t.raw("mechanics.services") as string[]
  const projects = t.raw("mechanics.projects") as Project[]
  const process = t.raw("mechanics.process") as Step[]

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 md:px-6 md:pt-10">
      <PageHero
        title={t("mechanics.hero.title")}
        subtitle={t("mechanics.hero.subtitle")}
        accent="mechanics"
      />

      <ServicesGrid title={t("common.services") as string} services={services} accent="mechanics" />
      <ProjectGrid title={t("common.projects") as string} projects={projects} accent="mechanics" />
      <ProcessSteps title={t("common.process") as string} steps={process} accent="mechanics" />

      <CTAContact
        title={t("mechanics.cta.title")}
        description={t("mechanics.cta.description")}
        buttonLabel={t("common.contactButton")}
        emailLabel={t("common.email")}
        emailValue={t("common.emailValue")}
        phoneLabel={t("common.phone")}
        phoneValue={t("common.phoneValue")}
        accent="mechanics"
      />
    </div>
  )
}
