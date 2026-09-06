import type { Metadata } from "next"
import LegalDocument from "@/components/LegalDocument"
import { privacyCopy } from "@/lib/legal"
import { createPageMetadata, resolveLocale } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata(locale, "privacy")
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale: localeValue } = await params
  const locale = resolveLocale(localeValue)

  return <LegalDocument locale={locale} copy={privacyCopy[locale]} />
}
