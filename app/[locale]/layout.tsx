import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { isLocale, locales } from "@/i18n/routing"
import SiteShell from "@/components/SiteShell"
import SiteFooter from "@/components/SiteFooter"
import OrganizationSchema from "@/components/OrganizationSchema"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <OrganizationSchema />
      <SiteShell locale={locale} footer={<SiteFooter locale={locale} />}>
        {children}
      </SiteShell>
    </NextIntlClientProvider>
  )
}
