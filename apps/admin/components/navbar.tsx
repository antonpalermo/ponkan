import { UserButton } from "@clerk/nextjs"
import { HtmlHTMLAttributes } from "react"

import NavbarLinks from "@/components/navbar-links"
import StoreSelector from "@/components/store-selector"

export interface NavbarContainerProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}

export function NavbarContainer({ ...props }: NavbarContainerProps) {
  return (
    <div
      className="container mx-auto inline-flex items-center justify-between px-2 sm:px-4"
      {...props}
    />
  )
}

export default function Navbar() {
  return (
    <nav className="w-full py-4">
      <NavbarContainer>
        <div className="inline-flex items-center space-x-4">
          <StoreSelector />
          <NavbarLinks />
        </div>

        <UserButton afterSignOutUrl="/" />
      </NavbarContainer>
    </nav>
  )
}
