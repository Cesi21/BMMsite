import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import SoftwarePage, { type SoftwarePageCopy } from "@/components/SoftwarePage"
import { createPageMetadata } from "@/lib/seo"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return createPageMetadata(locale, "software")
}

export default async function ITPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations("software")

  return <SoftwarePage locale={locale} copy={t.raw("page") as SoftwarePageCopy} />
}
