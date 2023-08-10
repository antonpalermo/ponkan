import { currentUser } from "@clerk/nextjs"
import { db } from "database"
import { redirect } from "next/navigation"

export default async function OverviewPage() {
  const user = (await currentUser()).emailAddresses[0]
  const store = await db
    .selectFrom("store")
    .select(["id", "name", "description", "owner"])
    .where("store.owner", "=", user.emailAddress)
    .executeTakeFirst()

  if (!store) {
    redirect("/store-setup")
  } else {
    redirect(`/overview/${store.id}`)
  }

  return <></>
}
