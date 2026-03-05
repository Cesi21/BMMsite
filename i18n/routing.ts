export const locales = ["sl", "en", "hr", "de"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "sl"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}