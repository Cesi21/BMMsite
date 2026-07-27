import { getTranslations } from "next-intl/server"
import BranchCard from "@/components/BranchCard"
import InfoSection from "@/components/InfoSection"
import PageHero from "@/components/PageHero"
import ProjectGrid from "@/components/ProjectGrid"
import ProcessSteps from "@/components/ProcessSteps"

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const projects = await getTranslations("pages.projects")
  const services = await getTranslations("pages.services")
  const branches = services.raw("branches") as { title: string; description: string; services: string[]; cta: string; path: string; accent: string }[]

  return (
    <div className="page-shell space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero
        eyebrow={projects("eyebrow")}
        title={`${services("title")} & ${projects("featuredTitle")}`}
        subtitle={services("subtitle")}
        accent="rgba(255,255,255,0.2)"
      />
      <section className="grid gap-4 lg:grid-cols-3">
        {branches.map((branch) => (
          <BranchCard
            key={branch.title}
            title={branch.title}
            description={branch.description}
            services={branch.services}
            cta={branch.cta}
            href={`/${locale}/${branch.path}`}
            accent={branch.accent}
          />
        ))}
      </section>
      <InfoSection title={services("approachTitle")} text={services("approachText")} />
      <InfoSection title={projects("noteTitle")} text={projects("noteText")} />
      <ProjectGrid title={projects("featuredTitle")} items={projects.raw("featured") as { title: string; text: string }[]} />
      <ProcessSteps title={projects("workflowTitle")} steps={projects.raw("workflow") as string[]} />
    </div>
  )
}
