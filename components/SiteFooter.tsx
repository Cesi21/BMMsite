import Link from "next/link"
import { getTranslations } from "next-intl/server"

type SiteFooterProps = {
  locale: string
}

export default async function SiteFooter({ locale }: SiteFooterProps) {
  const t = await getTranslations("footer")

  const links = [
    { label: t("about"), href: `/${locale}/o-nas` },
    { label: t("services"), href: `/${locale}/storitve` },
    { label: t("projects"), href: `/${locale}/projekti` },
    { label: t("contact"), href: `/${locale}/kontakt` }
  ]

  return (
    <footer className="border-t border-white/10 bg-[rgba(12,14,20,0.92)]">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 md:px-6 md:py-10">
        <div>
          <p className="text-lg font-semibold">BMM Cesar</p>
          <p className="mt-2 max-w-2xl text-sm text-white/65">{t("description")}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-white/45">{t("copyright")}</p>
      </div>
    </footer>
  )
}
