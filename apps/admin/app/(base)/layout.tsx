import { Fragment, ReactNode } from "react"
import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

import { db } from "database"

export interface BaseLayoutProps {
  children: ReactNode
}

export default async function BaseLayout({ children }: BaseLayoutProps) {
  const user = (await currentUser()).emailAddresses[0]
  const store = await db
    .selectFrom("store")
    .select(["id", "name", "description", "owner"])
    .where("store.owner", "=", user.emailAddress)
    .executeTakeFirst()

  if (store) {
    redirect(`/${store.id}`)
  }

  return <Fragment>{children}</Fragment>
}
