"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header"

type SiteShellProps = {
  locale: string
  children: React.ReactNode
  footer: React.ReactNode
}

const skipLabels: Record<string, string> = {
  sl: "Preskoči na vsebino",
  en: "Skip to content",
  hr: "Preskoči na sadržaj",
  de: "Zum Inhalt springen",
}

export default function SiteShell({ locale, children, footer }: SiteShellProps) {
  const pathname = usePathname()
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`
  const section = pathname.split("/")[2]
  const tone =
    section === "gradbenistvo"
      ? "construction"
      : section === "mehanika"
        ? "mechanics"
        : section === "racunalnistvo"
          ? "it"
          : "mixed"

  return (
    <div
      className={`site-shell flex flex-col ${isHome ? "h-dvh overflow-hidden" : "min-h-dvh"} bg-background text-foreground`}
      data-page-tone={tone}
      data-home={isHome}
    >
      <a href="#main-content" className="skip-link">
        {skipLabels[locale] ?? skipLabels.en}
      </a>
      <Header />
      <main id="main-content" className={isHome ? "min-h-0 flex-1 overflow-hidden" : "flex-1"}>{children}</main>
      {!isHome && footer}
    </div>
  )
}
