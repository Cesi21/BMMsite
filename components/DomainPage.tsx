import CTAContact from "@/components/CTAContact"
import PageHero from "@/components/PageHero"
import ProcessSteps from "@/components/ProcessSteps"
import ProjectGrid, { type ProjectItem } from "@/components/ProjectGrid"
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
  projectSampleLabel: string
  projectResultLabel: string
  projects: ProjectItem[]
  processTitle: string
  processSteps: string[]
  contactTitle: string
  contactText: string
  contactButton: string
}

export default function DomainPage(props: DomainPageProps) {
  return (
    <div className="domain-page page-shell space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={props.eyebrow} title={props.title} subtitle={props.subtitle} accent={props.accent} />
      <div className="domain-overview-grid grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <ServicesGrid title={props.servicesTitle} items={props.services} accent={props.accent} />
        <ProcessSteps title={props.processTitle} steps={props.processSteps} accent={props.accent} />
      </div>
      <ProjectGrid
        title={props.projectsTitle}
        sampleLabel={props.projectSampleLabel}
        resultLabel={props.projectResultLabel}
        items={props.projects}
        accent={props.accent}
      />
      <CTAContact
        title={props.contactTitle}
        text={props.contactText}
        button={props.contactButton}
        href={`/${props.locale}/kontakt`}
      />
    </div>
  )
}
