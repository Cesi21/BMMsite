import Link from "next/link"
import { getTranslations } from "next-intl/server"

type SiteFooterProps = {
  locale: string
}

export default async function SiteFooter({ locale }: SiteFooterProps) {
  const [t, home] = await Promise.all([
    getTranslations("footer"),
    getTranslations("home"),
  ])

  const legalLabels = {
    sl: { privacy: "Zasebnost", legal: "Podatki o podjetju" },
    en: { privacy: "Privacy", legal: "Company details" },
    hr: { privacy: "Privatnost", legal: "Podaci o poduzeću" },
    de: { privacy: "Datenschutz", legal: "Unternehmensangaben" },
  } as const
  const labels = legalLabels[locale as keyof typeof legalLabels] ?? legalLabels.en

  const links = [
    { label: t("about"), href: `/${locale}/o-nas` },
    { label: `${t("services")} & ${t("projects")}`, href: `/${locale}/projekti` },
    { label: t("contact"), href: `/${locale}/kontakt` },
    { label: labels.privacy, href: `/${locale}/zasebnost` },
    { label: labels.legal, href: `/${locale}/pravno` },
  ]

  const domains = [
    { label: home("construction"), href: `/${locale}/gradbenistvo`, tone: "construction" },
    { label: home("mechanics"), href: `/${locale}/mehanika`, tone: "mechanics" },
    { label: home("it"), href: `/${locale}/racunalnistvo`, tone: "it" },
  ]

  return (
    <footer className="site-footer relative overflow-hidden border-t">
      <div className="footer-spectrum" aria-hidden />
      <div className="page-shell grid gap-8 px-4 py-10 md:grid-cols-[1fr_auto] md:px-6 md:py-12">
        <div>
          <p className="text-lg font-semibold">BMM Cesar</p>
          <p className="muted-text mt-2 max-w-2xl text-sm">{t("description")}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {domains.map((domain) => (
              <Link
                key={domain.href}
                href={domain.href}
                className="footer-domain-link rounded-full border px-3 py-1.5 text-xs font-semibold"
                data-tone={domain.tone}
              >
                {domain.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="footer-link text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="soft-text text-xs md:col-span-2">{t("copyright")}</p>
      </div>
    </footer>
  )
}
