import { UserButton, currentUser } from "@clerk/nextjs"

import NavbarLinks from "@/components/navbar-links"
import StoreSelector from "@/components/store-selector"
import { db } from "database"

export default async function Navbar() {
  const { emailAddresses } = await currentUser()
  const owner = emailAddresses[0].emailAddress

  const stores = await db
    .selectFrom("store")
    .where("store.owner", "=", owner)
    .select(["store.id", "store.name"])
    .execute()

  return (
    <nav className="w-full py-4">
      <div className="container mx-auto inline-flex items-center justify-between px-2 sm:px-4">
        <div className="inline-flex items-center space-x-5">
          <StoreSelector stores={stores} />
          <NavbarLinks />
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}
