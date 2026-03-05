"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { locales } from "@/i18n/routing"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (nextLocale: string) => {
    const segments = pathname.split("/")

    if (segments.length > 1) {
      segments[1] = nextLocale
    }

    router.push(segments.join("/"))
  }

  return (
    <label className="relative">
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(event) => switchLocale(event.target.value)}
        className="h-10 rounded-xl border border-white/15 bg-[rgba(255,255,255,0.06)] px-3 text-sm font-medium text-white outline-none transition hover:border-white/30 focus:border-white/45"
        aria-label="Language"
      >
        {locales.map((entry) => (
          <option key={entry} value={entry} className="bg-[rgb(18,22,30)]">
            {entry.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  )
}
