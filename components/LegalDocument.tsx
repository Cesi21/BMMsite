import Link from "next/link"
import PageHero from "@/components/PageHero"
import { RevealGroup, RevealSectionItem } from "@/components/ScrollReveal"
import { COMPANY, COMPANY_ADDRESS } from "@/lib/company"
import { companyLabels, type LegalDocumentCopy } from "@/lib/legal"
import type { Locale } from "@/i18n/routing"

type LegalDocumentProps = {
  locale: Locale
  copy: LegalDocumentCopy
  showCompanyDetails?: boolean
}

export default function LegalDocument({ locale, copy, showCompanyDetails = false }: LegalDocumentProps) {
  const labels = companyLabels[locale]

  const companyRows = [
    [labels.legalName, COMPANY.legalName],
    [labels.shortName, COMPANY.shortRegisteredName],
    [labels.address, COMPANY_ADDRESS],
    [labels.registrationNumber, COMPANY.registrationNumber],
    [labels.vatId, COMPANY.vatId],
    [labels.legalForm, labels.legalFormValue],
    [labels.activity, COMPANY.registeredActivity],
    [labels.registry, COMPANY.registry],
  ]

  return (
    <div className="legal-page page-shell space-y-6 px-4 pb-20 pt-8 md:px-6 md:pt-10">
      <PageHero eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.intro} accent="rgba(255,255,255,0.2)" />

      {showCompanyDetails ? (
        <section className="legal-document surface-panel rounded-3xl border p-6 md:p-9">
          <dl className="company-data-grid grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
            {companyRows.map(([label, value]) => (
              <div key={label} className="company-data-item surface-subtle p-5">
                <dt className="soft-text text-[10px] font-semibold uppercase tracking-[0.16em]">{label}</dt>
                <dd className="mt-2 font-semibold leading-relaxed">{value}</dd>
              </div>
            ))}
            <div className="company-data-item surface-subtle p-5">
              <dt className="soft-text text-[10px] font-semibold uppercase tracking-[0.16em]">{labels.phone}</dt>
              <dd className="mt-2 font-semibold"><a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phoneDisplay}</a></dd>
            </div>
            <div className="company-data-item surface-subtle p-5">
              <dt className="soft-text text-[10px] font-semibold uppercase tracking-[0.16em]">{labels.email}</dt>
              <dd className="mt-2 font-semibold"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></dd>
            </div>
          </dl>
          <div className="muted-text mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span>{labels.sources}:</span>
            <a href="https://www.ajpes.si/podjetje/Blaz_Cesar_s.p.?EnotaStatus=1&enota=827698" target="_blank" rel="noreferrer" className="legal-source-link">AJPES</a>
            <a href="https://www.bizi.si/BMM-CESAR-BLAZ-CESAR-S-P/maticno-podjetje/" target="_blank" rel="noreferrer" className="legal-source-link">Bizi</a>
          </div>
        </section>
      ) : null}

      <RevealGroup className="grid gap-4">
        {copy.sections.map((section) => (
          <RevealSectionItem key={section.title} className="legal-section surface-panel rounded-3xl border p-6 md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="muted-text mt-4 max-w-5xl leading-7">{paragraph}</p>
            ))}
            {section.items ? (
              <ul className="legal-list muted-text mt-5 grid gap-3">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
          </RevealSectionItem>
        ))}
      </RevealGroup>

      <div className="flex flex-wrap items-center justify-between gap-4 px-2">
        <p className="soft-text text-xs">{copy.updated}</p>
        <Link href={`/${locale}/kontakt`} className="footer-link text-sm font-semibold">{COMPANY.email}</Link>
      </div>
    </div>
  )
}
