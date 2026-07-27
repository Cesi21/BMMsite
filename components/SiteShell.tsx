"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header"

type SiteShellProps = {
  locale: string
  children: React.ReactNode
  footer: React.ReactNode
}

export default function SiteShell({ locale, children, footer }: SiteShellProps) {
  const pathname = usePathname()
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`

  return (
    <div className={`${isHome ? "h-dvh overflow-hidden" : "min-h-dvh"} bg-background text-foreground`}>
      <Header />
      <main className={isHome ? "h-[calc(100dvh-65px)] overflow-hidden" : ""}>{children}</main>
      {!isHome && footer}
    </div>
  )
}
