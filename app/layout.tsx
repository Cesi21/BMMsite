import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BMM Cesar",
  description: "BMM Cesar - Gradbenistvo, Tuning & mehanika, Racunalnistvo"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
