import CustomLink from "./custom-link"

export default function Footer() {
  return (
    <footer className="mx-0 my-4 flex w-full flex-col gap-4 px-4 text-sm items-center">
      <div className="flex flex-col gap-4 sm:flex-row">
        All rights reserved &copy; {new Date().getFullYear()} <CustomLink href="https://github.com/sezeriper/recruity">Recruity</CustomLink> v0.0.1
      </div>
    </footer>
  )
}
