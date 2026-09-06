import type { Metadata } from "next"
import ThemeProvider from "@/components/ThemeProvider"
import SmoothScroll from "@/components/SmoothScroll"
import "lenis/dist/lenis.css"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://bmm-cesar.si"),
  applicationName: "BMM Cesar",
  authors: [{ name: "BMM CESAR, Blaž Cesar s.p.", url: "https://bmm-cesar.si" }],
  creator: "BMM Cesar",
  publisher: "BMM CESAR, Blaž Cesar s.p.",
  robots: { index: true, follow: true },
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
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
