import { MainNav } from "./main-nav"

export default function Header() {
  return (
    <header className="sticky flex justify-center w-full border-b">
      <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between">
        <MainNav />
      </div>
    </header>
  )
}
