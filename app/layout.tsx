import type { Metadata } from "next"
import ThemeProvider from "@/components/ThemeProvider"
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
