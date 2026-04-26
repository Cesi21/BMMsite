import { getTranslations } from "next-intl/server"
import InfoSection from "@/components/InfoSection"
import PageHero from "@/components/PageHero"
import ProjectGrid from "@/components/ProjectGrid"
import ProcessSteps from "@/components/ProcessSteps"

export default async function ProjectsPage() {
  const t = await getTranslations("pages.projects")

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} accent="rgba(255,255,255,0.2)" />
      <InfoSection title={t("noteTitle")} text={t("noteText")} />
      <ProjectGrid title={t("featuredTitle")} items={t.raw("featured") as { title: string; text: string }[]} />
      <ProcessSteps title={t("workflowTitle")} steps={t.raw("workflow") as string[]} />
    </div>
  )
}
