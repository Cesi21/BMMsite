import type { Metadata } from "next"
import ThemeProvider from "@/components/ThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://bmm-cesar.si"),
  title: {
    default: "BMM Cesar",
    template: "%s · BMM Cesar",
  },
  description: "BMM Cesar – gradbeništvo, tuning in mehanika ter računalništvo v eni praktični ekipi.",
  openGraph: {
    title: "BMM Cesar",
    description: "Gradimo. Optimiziramo. Razvijamo.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 908,
        alt: "BMM Cesar – tri povezana področja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMM Cesar",
    description: "Gradimo. Optimiziramo. Razvijamo.",
    images: ["/og.png"],
  },
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
