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

export default async function ConstructionPage() {
  const t = await getTranslations("domains")
  const services = t.raw("construction.services") as string[]
  const projects = t.raw("construction.projects") as Project[]
  const process = t.raw("construction.process") as Step[]

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 md:px-6 md:pt-10">
      <PageHero
        title={t("construction.hero.title")}
        subtitle={t("construction.hero.subtitle")}
        accent="construction"
      />

      <ServicesGrid title={t("common.services") as string} services={services} accent="construction" />
      <ProjectGrid title={t("common.projects") as string} projects={projects} accent="construction" />
      <ProcessSteps title={t("common.process") as string} steps={process} accent="construction" />

      <CTAContact
        title={t("construction.cta.title")}
        description={t("construction.cta.description")}
        buttonLabel={t("common.contactButton")}
        emailLabel={t("common.email")}
        emailValue={t("common.emailValue")}
        phoneLabel={t("common.phone")}
        phoneValue={t("common.phoneValue")}
        accent="construction"
      />
    </div>
  )
}
