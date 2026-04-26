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
    <section className="rounded-3xl border border-white/10 bg-[rgba(18,22,30,0.55)] p-6 md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">{props.title}</h2>
      <p className="mt-3 text-white/75">{props.intro}</p>
      <div className="mt-5 grid gap-3 text-sm text-white/80">
        <p><span className="text-white/60">{props.emailLabel}: </span><Link href={`mailto:${props.email}`} className="hover:underline">{props.email}</Link></p>
        <p><span className="text-white/60">{props.phoneLabel}: </span><Link href={`tel:${props.phone.replace(/\s+/g,"")}`} className="hover:underline">{props.phone}</Link></p>
        <p><span className="text-white/60">{props.locationLabel}: </span>{props.location}</p>
        <p><span className="text-white/60">{props.hours}</span></p>
      </div>
    </section>
  )
}
