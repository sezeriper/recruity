import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Recruity",
  description:
    "VTYS project.",
}

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-full min-h-screen w-full flex-col justify-between">
          { children}
        </main>
      </body>
    </html>
  )
}
