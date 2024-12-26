import { auth } from "@/auth"
import { SignIn } from "@/components/auth-components"
import { redirect } from "next/navigation"

export default async function Index() {
  const session = await auth()

  if (session) {
    redirect("/posting")
  }
  
  return (
    <div className="flex h-full min-h-screen w-full justify-center items-center">
      <div className="flex h-full w-full flex-col gap-6 justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to Recruity</h1>
        <p> Please sign in to get started. </p>
        <SignIn/>
      </div>
    </div>
  )
}