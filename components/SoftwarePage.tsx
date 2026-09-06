import Link from "next/link"
import Image from "next/image"
import { RevealCard, RevealGroup, RevealItem, RevealList, RevealListItem } from "@/components/ScrollReveal"

export type SoftwarePageCopy = {
  eyebrow: string
  hero: {
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
    todayLabel: string
    todayItems: string[]
    coreLabel: string
    coreHint: string
    resultLabel: string
    resultItems: string[]
  }
  beyond: {
    eyebrow: string
    title: string
    text: string
    websiteTitle: string
    websiteText: string
    solutionTitle: string
    solutionText: string
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; text: string; features: string[] }[]
  }
  workflows: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; steps: string[] }[]
  }
  commerce: {
    eyebrow: string
    title: string
    text: string
    storeTitle: string
    storeText: string
    storePoints: string[]
    enquiryTitle: string
    enquiryText: string
    enquiryPoints: string[]
    note: string
  }
  process: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; text: string }[]
  }
  principles: {
    eyebrow: string
    title: string
    items: { title: string; text: string }[]
  }
  about: {
    label: string
    title: string
    text: string
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    button: string
    note: string
  }
}

type SoftwarePageProps = {
  locale: string
  copy: SoftwarePageCopy
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="software-section-heading max-w-3xl">
      <p className="software-kicker text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">{title}</h2>
      {text ? <p className="muted-text mt-4 text-base leading-relaxed md:text-lg">{text}</p> : null}
    </div>
  )
}

export default function SoftwarePage({ locale, copy }: SoftwarePageProps) {
  const contactHref = `/${locale}/kontakt?area=it#contact-form`

  return (
    <div className="software-page page-shell space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <section className="software-hero surface-panel relative overflow-hidden rounded-[2rem] border p-7 md:p-10 xl:p-12">
        <div className="software-hero-grid" aria-hidden />
        <div className="software-hero-glow" aria-hidden />
        <div className="relative z-10 grid items-center gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-14">
          <div>
            <p className="software-kicker text-xs font-semibold uppercase tracking-[0.2em]">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl xl:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="muted-text mt-6 max-w-2xl text-base leading-relaxed md:text-xl">{copy.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={contactHref} className="software-primary-button inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition">
                {copy.hero.primaryCta}
              </Link>
              <Link href="#moznosti" className="software-secondary-button surface-subtle inline-flex items-center justify-center rounded-full border px-6 py-3.5 text-sm font-semibold transition">
                {copy.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <figure className="software-hero-visual relative overflow-hidden rounded-3xl border" aria-label={`${copy.hero.todayLabel}, ${copy.hero.coreLabel}, ${copy.hero.resultLabel}`}>
            <Image
              src="/software/operations-dashboard.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 48vw, 90vw"
              className="object-cover"
            />
            <div className="software-visual-shade" aria-hidden />
            <figcaption className="software-visual-caption surface-panel absolute inset-x-4 bottom-4 rounded-2xl border px-4 py-3 backdrop-blur-xl md:inset-x-5 md:bottom-5">
              <span className="software-kicker block text-[10px] font-semibold uppercase tracking-[0.18em]">{copy.hero.todayLabel}</span>
              <strong className="mt-1 block text-sm md:text-base">{copy.hero.coreLabel}</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="software-beyond surface-panel rounded-3xl border p-7 md:p-10" id="moznosti">
        <SectionHeading eyebrow={copy.beyond.eyebrow} title={copy.beyond.title} text={copy.beyond.text} />
        <RevealGroup className="mt-8 grid gap-4 lg:grid-cols-2">
          <RevealCard className="software-compare-card surface-subtle rounded-2xl border p-6">
            <span className="software-compare-number">01</span>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight">{copy.beyond.websiteTitle}</h3>
            <p className="muted-text mt-3 leading-relaxed">{copy.beyond.websiteText}</p>
          </RevealCard>
          <RevealCard className="software-compare-card software-compare-card-accent surface-subtle rounded-2xl border p-6">
            <span className="software-compare-number">02</span>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight">{copy.beyond.solutionTitle}</h3>
            <p className="muted-text mt-3 leading-relaxed">{copy.beyond.solutionText}</p>
          </RevealCard>
        </RevealGroup>
      </section>

      <section className="software-services surface-panel rounded-3xl border p-7 md:p-10">
        <SectionHeading eyebrow={copy.services.eyebrow} title={copy.services.title} text={copy.services.intro} />
        <RevealGroup className="software-services-grid mt-8 grid gap-4 lg:grid-cols-2">
          {copy.services.items.map((service, index) => (
            <RevealCard key={service.title} className="software-service-card surface-subtle rounded-2xl border p-6">
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-xl font-semibold leading-tight md:text-2xl">{service.title}</h3>
                <span className="software-service-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="muted-text mt-4 leading-relaxed">{service.text}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="software-feature flex gap-2.5 text-sm leading-relaxed">
                    <span className="software-feature-dot mt-2" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </RevealCard>
          ))}
        </RevealGroup>
      </section>

      <section className="software-workflows surface-panel rounded-3xl border p-7 md:p-10">
        <SectionHeading eyebrow={copy.workflows.eyebrow} title={copy.workflows.title} text={copy.workflows.intro} />
        <RevealGroup className="mt-8 grid gap-4 lg:grid-cols-2">
          {copy.workflows.items.map((workflow, index) => (
            <RevealCard key={workflow.title} className="software-workflow-card surface-subtle rounded-2xl border p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">{workflow.title}</h3>
                <span className="software-workflow-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <ol className="software-workflow-steps mt-5 flex flex-col gap-2 md:flex-row md:items-stretch">
                {workflow.steps.map((step, stepIndex) => (
                  <li key={step} className="software-workflow-step relative flex flex-1 items-center rounded-xl border px-3 py-3 text-sm leading-snug">
                    <span>{step}</span>
                    {stepIndex < workflow.steps.length - 1 ? <span className="software-step-connector" aria-hidden /> : null}
                  </li>
                ))}
              </ol>
            </RevealCard>
          ))}
        </RevealGroup>
      </section>

      <section className="software-commerce surface-panel overflow-hidden rounded-3xl border p-7 md:p-10">
        <SectionHeading eyebrow={copy.commerce.eyebrow} title={copy.commerce.title} text={copy.commerce.text} />
        <RevealGroup className="mt-8">
          <RevealItem className="software-catalogue-visual relative overflow-hidden rounded-2xl border">
            <Image
              src="/software/b2b-catalogue.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 82vw, 94vw"
              className="object-cover"
            />
            <div className="software-visual-shade software-visual-shade-soft" aria-hidden />
            <div className="software-catalogue-label surface-panel absolute bottom-4 left-4 rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-xl md:bottom-5 md:left-5">
              {copy.commerce.enquiryTitle}
            </div>
          </RevealItem>
        </RevealGroup>
        <RevealGroup className="mt-8 grid gap-4 lg:grid-cols-2">
          <RevealCard className="software-commerce-card surface-subtle rounded-2xl border p-6">
            <h3 className="text-2xl font-semibold tracking-tight">{copy.commerce.storeTitle}</h3>
            <p className="muted-text mt-3 leading-relaxed">{copy.commerce.storeText}</p>
            <ul className="mt-5 grid gap-3">
              {copy.commerce.storePoints.map((point) => <li key={point} className="software-check-row flex gap-3 text-sm"><span aria-hidden>✓</span>{point}</li>)}
            </ul>
          </RevealCard>
          <RevealCard className="software-commerce-card software-commerce-card-accent surface-subtle rounded-2xl border p-6">
            <h3 className="text-2xl font-semibold tracking-tight">{copy.commerce.enquiryTitle}</h3>
            <p className="muted-text mt-3 leading-relaxed">{copy.commerce.enquiryText}</p>
            <ul className="mt-5 grid gap-3">
              {copy.commerce.enquiryPoints.map((point) => <li key={point} className="software-check-row flex gap-3 text-sm"><span aria-hidden>✓</span>{point}</li>)}
            </ul>
          </RevealCard>
        </RevealGroup>
        <p className="software-commerce-note mt-4 rounded-2xl border px-5 py-4 text-sm leading-relaxed">{copy.commerce.note}</p>
      </section>

      <section className="software-process surface-panel rounded-3xl border p-7 md:p-10">
        <SectionHeading eyebrow={copy.process.eyebrow} title={copy.process.title} text={copy.process.intro} />
        <RevealList className="software-process-list relative mt-8 grid gap-3 lg:grid-cols-5">
          {copy.process.items.map((step, index) => (
            <RevealListItem key={step.title} className="software-process-step surface-subtle relative rounded-2xl border p-5">
              <span className="software-process-number grid size-10 place-items-center rounded-full text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-semibold leading-tight">{step.title}</h3>
              <p className="muted-text mt-2 text-sm leading-relaxed">{step.text}</p>
            </RevealListItem>
          ))}
        </RevealList>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <section className="software-principles surface-panel rounded-3xl border p-7 md:p-10">
          <SectionHeading eyebrow={copy.principles.eyebrow} title={copy.principles.title} />
          <RevealGroup className="mt-7 grid gap-3 sm:grid-cols-2">
            {copy.principles.items.map((principle) => (
              <RevealCard key={principle.title} className="software-principle surface-subtle rounded-2xl border p-5">
                <h3 className="font-semibold">{principle.title}</h3>
                <p className="muted-text mt-2 text-sm leading-relaxed">{principle.text}</p>
              </RevealCard>
            ))}
          </RevealGroup>
        </section>

        <aside className="software-about surface-panel relative overflow-hidden rounded-3xl border p-7 md:p-10">
          <div className="software-about-grid" aria-hidden />
          <div className="relative z-10">
            <p className="software-kicker text-xs font-semibold uppercase tracking-[0.2em]">{copy.about.label}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em]">{copy.about.title}</h2>
            <p className="muted-text mt-5 leading-relaxed">{copy.about.text}</p>
          </div>
        </aside>
      </div>

      <section className="software-final-cta surface-panel relative overflow-hidden rounded-3xl border p-7 md:p-10">
        <div className="software-final-glow" aria-hidden />
        <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="software-kicker text-xs font-semibold uppercase tracking-[0.2em]">{copy.contact.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">{copy.contact.title}</h2>
            <p className="muted-text mt-4 text-base leading-relaxed md:text-lg">{copy.contact.text}</p>
            <p className="soft-text mt-4 text-sm">{copy.contact.note}</p>
          </div>
          <Link href={contactHref} className="software-primary-button inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition">
            {copy.contact.button}
          </Link>
        </div>
      </section>
    </div>
  )
}
