import { UserButton, currentUser } from "@clerk/nextjs"

import NavbarLinks from "@/components/navbar-links"
import StoreSelector from "@/components/store-selector"

export interface NavbarProps {
  stores: { id: string; name: string }[]
}

export default async function Navbar({ stores }: NavbarProps) {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between px-2 sm:px-4">
        <div className="inline-flex items-center space-x-5">
          <StoreSelector stores={stores} />
          <NavbarLinks />
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}
