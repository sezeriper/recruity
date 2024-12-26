import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { auth } from "@/auth"
import { SignIn } from "@/components/auth-components"
import { redirect } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Recruity",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
}

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const session = await auth()
  if (!session) {
    redirect("/")
  }

  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="flex h-full min-h-screen w-full flex-col justify-between">
            <div className="flex flex-col h-full min-h-screen items-center justify-between">
              <Header/>
              <div className="flex flex-col items-center justify-start flex-1 w-full max-w-7xl px-4 py-8">
                {children}
              </div>
              <Footer/>
            </div>
          </main>
      </body>
    </html>
  )
}
