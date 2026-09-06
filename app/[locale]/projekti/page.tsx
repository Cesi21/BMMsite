import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import BranchCard from "@/components/BranchCard"
import InfoSection from "@/components/InfoSection"
import PageHero from "@/components/PageHero"
import ProjectGrid, { type ProjectItem } from "@/components/ProjectGrid"
import ProcessSteps from "@/components/ProcessSteps"
import { RevealGroup } from "@/components/ScrollReveal"
import { createPageMetadata } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata(locale, "projects")
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params
  const projects = await getTranslations("pages.projects")
  const services = await getTranslations("pages.services")
  const domains = await getTranslations("domains")
  const branches = services.raw("branches") as { title: string; description: string; services: string[]; cta: string; path: string; accent: string }[]
  const toneByPath = {
    gradbenistvo: "construction",
    mehanika: "mechanics",
    racunalnistvo: "it",
  } as const
  const featuredProjects = [
    (domains.raw("construction.projects") as ProjectItem[])[0],
    (domains.raw("mechanics.projects") as ProjectItem[])[0],
    projects.raw("softwareExample") as ProjectItem,
  ]

  return (
    <div className="mixed-page page-shell space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero
        eyebrow={projects("eyebrow")}
        title={`${services("title")} & ${projects("featuredTitle")}`}
        subtitle={services("subtitle")}
        accent="rgba(255,255,255,0.2)"
      />
      <RevealGroup className="grid gap-4 lg:grid-cols-3">
        {branches.map((branch) => (
          <BranchCard
            key={branch.title}
            title={branch.title}
            description={branch.description}
            services={branch.services}
            cta={branch.cta}
            href={`/${locale}/${branch.path}`}
            accent={branch.accent}
            tone={toneByPath[branch.path as keyof typeof toneByPath]}
          />
        ))}
      </RevealGroup>
      <RevealGroup className="grid gap-6 lg:grid-cols-2">
        <InfoSection title={services("approachTitle")} text={services("approachText")} tone="construction" />
        <InfoSection title={projects("noteTitle")} text={projects("noteText")} tone="it" />
      </RevealGroup>
      <ProjectGrid
        title={projects("featuredTitle")}
        sampleLabel={projects("possibleLabel")}
        resultLabel={domains("common.result")}
        items={featuredProjects}
      />
      <ProcessSteps title={projects("workflowTitle")} steps={projects.raw("workflow") as string[]} />
    </div>
  )
}
