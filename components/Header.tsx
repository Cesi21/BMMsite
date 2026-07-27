"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
  const t = useTranslations("nav")
  const home = useTranslations("home")
  const locale = useLocale()

  const links = [
    { label: t("links.home"), href: `/${locale}` },
    { label: home("construction"), href: `/${locale}/gradbenistvo` },
    { label: home("mechanics"), href: `/${locale}/mehanika` },
    { label: home("it"), href: `/${locale}/racunalnistvo` },
    { label: t("links.about"), href: `/${locale}/o-nas` },
    { label: t("links.projects"), href: `/${locale}/projekti` },
    { label: t("links.contact"), href: `/${locale}/kontakt` }
  ]

  return (
    <header className="site-header sticky top-0 z-50 border-b shadow-[0_10px_40px_rgba(7,18,47,0.18)] backdrop-blur-2xl">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 py-3 md:grid-cols-[auto_1fr_auto] md:px-6">
        <Link href={`/${locale}`} className="flex min-w-0 items-center gap-3">
          <div className="header-brand-mark grid h-10 w-10 shrink-0 place-items-center rounded-xl border text-xs font-semibold tracking-[0.22em] text-white shadow-[0_8px_30px_rgba(59,130,246,0.2)]">
            B
          </div>
          <div className="min-w-0 leading-tight">
            <p className="text-base font-semibold tracking-[0.08em]">BMM Cesar</p>
            <p className="muted-text hidden truncate text-[11px] xl:block">{t("tagline")}</p>
          </div>
        </Link>

        <nav className="hidden gap-1.5 lg:flex lg:justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="header-nav-link shrink-0 rounded-xl border px-2.5 py-2 text-[10px] font-medium uppercase tracking-[0.1em] transition xl:px-3 xl:text-[11px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
