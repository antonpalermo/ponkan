import CreateStoreForm from "@/components/create-store-form"
import { currentUser } from "@clerk/nextjs"
import { prisma } from "database"
import { redirect } from "next/navigation"

export default async function StoreSetupPage() {
  const user = (await currentUser()).emailAddresses[0]
  const store = await prisma.stores.findFirst({
    where: { owner: user.emailAddress }
  })

  if (store) {
    redirect(`/${store.id}`)
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="min-w-[428px]">
        <div className="mb-5 flex flex-col space-y-1.5 text-center sm:text-left">
          <h1 className="text-lg font-semibold leading-none tracking-tight">
            Open new store
          </h1>
          <p className="text-muted-foreground text-sm">
            Create new store to start posting and manage products.
          </p>
        </div>
        {/* TODO: improve this and remove the hidden props */}
        <CreateStoreForm hidden={true} />
      </div>
    </div>
  )
}
