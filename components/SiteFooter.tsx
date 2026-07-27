import Link from "next/link"
import { getTranslations } from "next-intl/server"

type SiteFooterProps = {
  locale: string
}

export default async function SiteFooter({ locale }: SiteFooterProps) {
  const t = await getTranslations("footer")

  const links = [
    { label: t("about"), href: `/${locale}/o-nas` },
    { label: `${t("services")} & ${t("projects")}`, href: `/${locale}/projekti` },
    { label: t("contact"), href: `/${locale}/kontakt` }
  ]

  return (
    <footer className="site-footer border-t">
      <div className="page-shell grid gap-6 px-4 py-8 md:px-6 md:py-10">
        <div>
          <p className="text-lg font-semibold">BMM Cesar</p>
          <p className="muted-text mt-2 max-w-2xl text-sm">{t("description")}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="header-nav-link rounded-lg border px-3 py-2 text-sm transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="soft-text text-xs">{t("copyright")}</p>
      </div>
    </footer>
  )
}
