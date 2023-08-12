import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

import Navbar from "@/components/navbar"
import ModalProvider from "@/providers/modal-provider"

import { db, Store } from "database"

export const metadata: Metadata = {
  title: {
    template: "Dashboard - %s",
    default: "Dashboard"
  }
}

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const user = (await currentUser()).emailAddresses[0]
  const store = await db
    .selectFrom("store")
    .select(["id", "name", "description", "owner"])
    .where("store.owner", "=", user.emailAddress)
    .executeTakeFirst()

  if (!store) {
    redirect("/")
  }

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-2 sm:px-4">
        <ModalProvider />
        {children}
      </div>
    </main>
  )
}
