import type { Metadata } from "next"
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/routing"

export const SITE_URL = "https://bmm-cesar.si"

export const pagePaths = {
  home: "",
  construction: "/gradbenistvo",
  mechanics: "/mehanika",
  software: "/racunalnistvo",
  projects: "/projekti",
  about: "/o-nas",
  contact: "/kontakt",
  privacy: "/zasebnost",
  legal: "/pravno",
} as const

export type SeoPageKey = keyof typeof pagePaths

export const indexedPageKeys = Object.keys(pagePaths) as SeoPageKey[]

const hreflangByLocale: Record<Locale, string> = {
  sl: "sl-SI",
  en: "en",
  hr: "hr-HR",
  de: "de-DE",
}

const openGraphLocaleByLocale: Record<Locale, string> = {
  sl: "sl_SI",
  en: "en_GB",
  hr: "hr_HR",
  de: "de_DE",
}

const seoCopy: Record<Locale, Record<SeoPageKey, { title: string; description: string }>> = {
  sl: {
    home: {
      title: "BMM Cesar | Gradbeništvo, mehanika in spletne rešitve",
      description: "BMM Cesar povezuje gradbeništvo, tuning in mehaniko ter praktične programske in spletne rešitve za podjetja.",
    },
    construction: {
      title: "Gradbeništvo, keramika in prenove | BMM Cesar",
      description: "Prenove, polaganje keramike, kopalnice in zaključna gradbena dela za stanovanjske in poslovne prostore.",
    },
    mechanics: {
      title: "Tuning, diagnostika in mehanika | BMM Cesar",
      description: "Diagnostika, tuning, optimizacija ter servis vozil, traktorjev in delovnih strojev, tudi na terenu.",
    },
    software: {
      title: "Programske in spletne rešitve za podjetja | BMM Cesar",
      description: "Poslovne spletne strani, B2B katalogi, sistemi za povpraševanja, avtomatizacija Excela in programska orodja po meri.",
    },
    projects: {
      title: "Storitve in primeri rešitev | BMM Cesar",
      description: "Pregled gradbenih, mehanskih in programskih storitev BMM Cesar ter konkretnih primerov možnih rešitev.",
    },
    about: {
      title: "O podjetju | BMM Cesar",
      description: "Spoznajte BMM Cesar, praktičen pristop k gradbeništvu, mehaniki in razvoju digitalnih rešitev.",
    },
    contact: {
      title: "Kontakt in povpraševanje | BMM Cesar",
      description: "Kontaktirajte BMM Cesar za gradbeništvo, mehaniko, tuning ali programske in spletne rešitve.",
    },
    privacy: {
      title: "Politika zasebnosti | BMM Cesar",
      description: "Informacije o obdelavi osebnih podatkov, kontaktnem obrazcu, pravicah posameznikov in lokalni shrambi.",
    },
    legal: {
      title: "Podatki o podjetju in pravne informacije | BMM Cesar",
      description: "Registrski in kontaktni podatki podjetja BMM CESAR, Blaž Cesar s.p. ter pravne informacije o uporabi spletnega mesta.",
    },
  },
  en: {
    home: {
      title: "BMM Cesar | Construction, mechanics and web solutions",
      description: "BMM Cesar brings together construction, tuning and mechanics, and practical software and web solutions for businesses.",
    },
    construction: {
      title: "Construction, tiling and renovations | BMM Cesar",
      description: "Renovations, tiling, bathrooms and finishing works for residential and commercial properties.",
    },
    mechanics: {
      title: "Tuning, diagnostics and mechanics | BMM Cesar",
      description: "Diagnostics, tuning, optimization and servicing for vehicles, tractors and working machinery, including field work.",
    },
    software: {
      title: "Software and web solutions for businesses | BMM Cesar",
      description: "Business websites, B2B catalogues, enquiry systems, Excel automation and focused custom software tools.",
    },
    projects: {
      title: "Services and solution examples | BMM Cesar",
      description: "Explore BMM Cesar construction, mechanical and software services with practical examples of possible solutions.",
    },
    about: {
      title: "About the company | BMM Cesar",
      description: "Learn about BMM Cesar and its practical approach to construction, mechanics and digital solutions.",
    },
    contact: {
      title: "Contact and enquiries | BMM Cesar",
      description: "Contact BMM Cesar about construction, mechanics, tuning, or software and web solutions.",
    },
    privacy: {
      title: "Privacy policy | BMM Cesar",
      description: "Information about personal-data processing, the contact form, individual rights and local storage.",
    },
    legal: {
      title: "Company details and legal notice | BMM Cesar",
      description: "Registration and contact details for BMM CESAR, Blaž Cesar s.p. and legal information about this website.",
    },
  },
  hr: {
    home: {
      title: "BMM Cesar | Građevina, mehanika i web rješenja",
      description: "BMM Cesar povezuje građevinu, tuning i mehaniku te praktična programska i web rješenja za poduzeća.",
    },
    construction: {
      title: "Građevina, keramika i renovacije | BMM Cesar",
      description: "Renovacije, postavljanje keramike, kupaonice i završni građevinski radovi za stambene i poslovne prostore.",
    },
    mechanics: {
      title: "Tuning, dijagnostika i mehanika | BMM Cesar",
      description: "Dijagnostika, tuning, optimizacija i servis vozila, traktora i radnih strojeva, uključujući terenski rad.",
    },
    software: {
      title: "Programska i web rješenja za poduzeća | BMM Cesar",
      description: "Poslovne web stranice, B2B katalozi, sustavi upita, automatizacija Excela i prilagođeni programski alati.",
    },
    projects: {
      title: "Usluge i primjeri rješenja | BMM Cesar",
      description: "Pregled građevinskih, mehaničkih i programskih usluga BMM Cesar s praktičnim primjerima mogućih rješenja.",
    },
    about: {
      title: "O poduzeću | BMM Cesar",
      description: "Upoznajte BMM Cesar i praktičan pristup građevini, mehanici i razvoju digitalnih rješenja.",
    },
    contact: {
      title: "Kontakt i upit | BMM Cesar",
      description: "Kontaktirajte BMM Cesar za građevinu, mehaniku, tuning ili programska i web rješenja.",
    },
    privacy: {
      title: "Pravila privatnosti | BMM Cesar",
      description: "Informacije o obradi osobnih podataka, kontaktnom obrascu, pravima pojedinaca i lokalnoj pohrani.",
    },
    legal: {
      title: "Podaci o poduzeću i pravne informacije | BMM Cesar",
      description: "Registracijski i kontaktni podaci BMM CESAR, Blaž Cesar s.p. te pravne informacije o korištenju stranice.",
    },
  },
  de: {
    home: {
      title: "BMM Cesar | Bau, Mechanik und Weblösungen",
      description: "BMM Cesar verbindet Bauarbeiten, Tuning und Mechanik mit praktischen Software- und Weblösungen für Unternehmen.",
    },
    construction: {
      title: "Bau, Fliesen und Renovierungen | BMM Cesar",
      description: "Renovierungen, Fliesenarbeiten, Bäder und Ausbauarbeiten für Wohn- und Geschäftsräume.",
    },
    mechanics: {
      title: "Tuning, Diagnose und Mechanik | BMM Cesar",
      description: "Diagnose, Tuning, Optimierung und Service für Fahrzeuge, Traktoren und Arbeitsmaschinen, auch vor Ort.",
    },
    software: {
      title: "Software- und Weblösungen für Unternehmen | BMM Cesar",
      description: "Unternehmenswebsites, B2B-Kataloge, Anfragesysteme, Excel-Automatisierung und fokussierte Software nach Maß.",
    },
    projects: {
      title: "Leistungen und Lösungsbeispiele | BMM Cesar",
      description: "Bau-, Mechanik- und Softwareleistungen von BMM Cesar mit praktischen Beispielen möglicher Lösungen.",
    },
    about: {
      title: "Über das Unternehmen | BMM Cesar",
      description: "Lernen Sie BMM Cesar und den praktischen Ansatz in Bau, Mechanik und digitalen Lösungen kennen.",
    },
    contact: {
      title: "Kontakt und Anfrage | BMM Cesar",
      description: "Kontaktieren Sie BMM Cesar zu Bau, Mechanik, Tuning sowie Software- und Weblösungen.",
    },
    privacy: {
      title: "Datenschutzerklärung | BMM Cesar",
      description: "Informationen zur Verarbeitung personenbezogener Daten, zum Kontaktformular, zu Betroffenenrechten und lokaler Speicherung.",
    },
    legal: {
      title: "Unternehmensangaben und rechtliche Hinweise | BMM Cesar",
      description: "Register- und Kontaktdaten von BMM CESAR, Blaž Cesar s.p. sowie rechtliche Hinweise zu dieser Website.",
    },
  },
}

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale
}

export function localizedPath(locale: Locale, page: SeoPageKey): string {
  return `/${locale}${pagePaths[page]}`
}

export function localizedUrl(locale: Locale, page: SeoPageKey): string {
  return `${SITE_URL}${localizedPath(locale, page)}`
}

export function languageAlternates(page: SeoPageKey): Record<string, string> {
  const entries = locales.map((locale) => [hreflangByLocale[locale], localizedUrl(locale, page)])

  return {
    ...Object.fromEntries(entries),
    "x-default": localizedUrl(defaultLocale, page),
  }
}

export function createPageMetadata(localeValue: string, page: SeoPageKey): Metadata {
  const locale = resolveLocale(localeValue)
  const copy = seoCopy[locale][page]
  const url = localizedUrl(locale, page)

  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical: url,
      languages: languageAlternates(page),
    },
    openGraph: {
      type: "website",
      siteName: "BMM Cesar",
      title: copy.title,
      description: copy.description,
      url,
      locale: openGraphLocaleByLocale[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => openGraphLocaleByLocale[item]),
      images: [{ url: `${SITE_URL}/og.png`, width: 1732, height: 908, alt: "BMM Cesar" }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [`${SITE_URL}/og.png`],
    },
  }
}
