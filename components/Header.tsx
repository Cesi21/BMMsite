"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Header() {
  const t = useTranslations("nav")
  const locale = useLocale()

  const links = [
    { label: t("links.home"), href: `/${locale}` },
    { label: t("links.about"), href: `/${locale}/o-nas` },
    { label: t("links.services"), href: `/${locale}/storitve` },
    { label: t("links.projects"), href: `/${locale}/projekti` },
    { label: t("links.contact"), href: `/${locale}/kontakt` }
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,12,16,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-[rgba(18,22,30,0.92)] text-xs font-semibold tracking-[0.22em] text-white/90">
              B
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold tracking-[0.08em]">BMM Cesar</p>
              <p className="text-[11px] text-white/60">{t("tagline")}</p>
            </div>
          </div>

          <LanguageSwitcher />
        </div>

        <nav className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/80 transition hover:border-white/35 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
