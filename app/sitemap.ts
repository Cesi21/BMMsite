import type { MetadataRoute } from "next"
import { locales } from "@/i18n/routing"
import { indexedPageKeys, languageAlternates, localizedUrl, type SeoPageKey } from "@/lib/seo"

const priorityByPage: Record<SeoPageKey, number> = {
  home: 1,
  construction: 0.9,
  mechanics: 0.9,
  software: 0.9,
  projects: 0.8,
  about: 0.6,
  contact: 0.8,
  privacy: 0.3,
  legal: 0.3,
}

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedPageKeys.flatMap((page) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, page),
      changeFrequency: page === "home" ? "monthly" as const : "yearly" as const,
      priority: priorityByPage[page],
      alternates: { languages: languageAlternates(page) },
    })),
  )
}
