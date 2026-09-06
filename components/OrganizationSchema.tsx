import { COMPANY } from "@/lib/company"

export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${COMPANY.website}/#organization`,
    name: COMPANY.brandName,
    legalName: COMPANY.legalName,
    url: COMPANY.website,
    email: COMPANY.email,
    telephone: COMPANY.phoneHref,
    taxID: COMPANY.vatId,
    identifier: COMPANY.registrationNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      postalCode: COMPANY.postalCode,
      addressLocality: COMPANY.locality,
      addressCountry: "SI",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
