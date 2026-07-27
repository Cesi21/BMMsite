import CTAContact from "@/components/CTAContact"
import PageHero from "@/components/PageHero"
import ProcessSteps from "@/components/ProcessSteps"
import ProjectGrid from "@/components/ProjectGrid"
import ServicesGrid from "@/components/ServicesGrid"

type DomainPageProps = {
  locale: string
  accent: string
  eyebrow: string
  title: string
  subtitle: string
  servicesTitle: string
  services: string[]
  projectsTitle: string
  projects: { title: string; text: string }[]
  processTitle: string
  processSteps: string[]
  contactTitle: string
  contactText: string
  contactButton: string
}

export default function DomainPage(props: DomainPageProps) {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={props.eyebrow} title={props.title} subtitle={props.subtitle} accent={props.accent} />
      <ServicesGrid title={props.servicesTitle} items={props.services} accent={props.accent} />
      <ProjectGrid title={props.projectsTitle} items={props.projects} accent={props.accent} />
      <ProcessSteps title={props.processTitle} steps={props.processSteps} accent={props.accent} />
      <CTAContact
        title={props.contactTitle}
        text={props.contactText}
        button={props.contactButton}
        href={`/${props.locale}/kontakt`}
      />
    </div>
  )
}
