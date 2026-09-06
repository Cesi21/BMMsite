"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
  const t = useTranslations("nav")
  const home = useTranslations("home")
  const locale = useLocale()
  const pathname = usePathname()

  const links = [
    { label: t("links.home"), href: `/${locale}`, tone: "mixed" },
    { label: home("construction"), href: `/${locale}/gradbenistvo`, tone: "construction" },
    { label: home("mechanics"), href: `/${locale}/mehanika`, tone: "mechanics" },
    { label: home("it"), href: `/${locale}/racunalnistvo`, tone: "it" },
    { label: t("links.about"), href: `/${locale}/o-nas`, tone: "mixed" },
    { label: `${t("links.services")} & ${t("links.projects")}`, href: `/${locale}/projekti`, tone: "mixed" },
    { label: t("links.contact"), href: `/${locale}/kontakt`, tone: "mixed" }
  ]

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href || pathname === `${href}/` : pathname.startsWith(href)

  return (
    <header className="site-header sticky top-0 z-50 shrink-0 border-b backdrop-blur-2xl">
      <div className="brand-spectrum" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="header-primary grid w-full grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-3 md:px-6 2xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link href={`/${locale}`} className="header-brand flex min-w-0 items-center gap-2">
          <div className="header-brand-mark grid h-10 w-10 shrink-0 place-items-center rounded-xl border text-xs font-semibold tracking-[0.22em] text-white">
            B
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-[0.04em] sm:text-base">BMM Cesar</p>
            <p className="muted-text hidden truncate text-[11px] 2xl:block">{t("tagline")}</p>
          </div>
        </Link>

        <nav className="desktop-nav hidden flex-wrap gap-1 2xl:flex 2xl:justify-center" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="header-nav-link shrink-0 rounded-xl border px-2.5 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] transition xl:px-3 xl:text-[11px]"
              data-tone={link.tone}
              data-active={isActive(link.href)} aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>

      <nav className="mobile-nav flex gap-2 overflow-x-auto px-4 pb-3 2xl:hidden" aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="header-nav-link shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em]"
            data-tone={link.tone}
            data-active={isActive(link.href)} aria-current={isActive(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
