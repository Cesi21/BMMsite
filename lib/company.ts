export const COMPANY = {
  brandName: "BMM Cesar",
  shortRegisteredName: "BMM CESAR, Blaž Cesar s.p.",
  legalName: "BMM CESAR, oblaganje tal in sten Blaž Cesar s.p.",
  streetAddress: "Ravno 3",
  postalCode: "3224",
  locality: "Dobje pri Planini",
  country: "Slovenija",
  registrationNumber: "9207350000",
  vatId: "SI54696291",
  phoneDisplay: "031 206 207",
  phoneHref: "+38631206207",
  email: "info@bmm-cesar.si",
  registeredActivity: "F43.330 – Oblaganje tal in sten",
  registry: "AJPES, izpostava Celje",
  website: "https://bmm-cesar.si",
} as const

export const COMPANY_ADDRESS = `${COMPANY.streetAddress}, ${COMPANY.postalCode} ${COMPANY.locality}`
