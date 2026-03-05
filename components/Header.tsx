"use client"

import { useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Header() {
  const t = useTranslations("nav")

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-white/10 bg-[rgba(10,12,16,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-[rgba(255,255,255,0.06)] text-sm font-semibold tracking-[0.22em] text-white/90">
            B
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-[0.12em]">BMM Cesar</p>
            <p className="text-[11px] uppercase tracking-[0.12em] text-white/60">{t("tagline")}</p>
          </div>
        </div>

        <LanguageSwitcher />
      </div>
    </header>
  )
}
