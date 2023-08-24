import { Fragment, ReactNode } from "react"
import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

import { prisma } from "database"

export interface BaseLayoutProps {
  children: ReactNode
}

export default async function BaseLayout({ children }: BaseLayoutProps) {
  const user = (await currentUser()).emailAddresses[0]
  const store = await prisma.stores.findFirst({
    where: { owner: user.emailAddress }
  })

  if (store) {
    redirect(`/${store.id}`)
  }

  return <Fragment>{children}</Fragment>
}
