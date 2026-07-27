import Link from "next/link"

type ContactDetailsProps = {
  title: string
  intro: string
  emailLabel: string
  phoneLabel: string
  locationLabel: string
  email: string
  phone: string
  location: string
  hours: string
}

export default function ContactDetails(props: ContactDetailsProps) {
  return (
    <section className="surface-panel rounded-3xl border p-6 md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">{props.title}</h2>
      <p className="muted-text mt-3">{props.intro}</p>
      <div className="muted-text mt-5 grid gap-3 text-sm">
        <p><span className="soft-text">{props.emailLabel}: </span><Link href={`mailto:${props.email}`} className="hover:underline">{props.email}</Link></p>
        <p><span className="soft-text">{props.phoneLabel}: </span><Link href={`tel:${props.phone.replace(/\s+/g,"")}`} className="hover:underline">{props.phone}</Link></p>
        <p><span className="soft-text">{props.locationLabel}: </span>{props.location}</p>
        <p><span className="soft-text">{props.hours}</span></p>
      </div>
    </section>
  )
}
