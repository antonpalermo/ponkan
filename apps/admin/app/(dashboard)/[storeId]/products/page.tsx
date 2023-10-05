import Link from "next/link"
import { Metadata } from "next"

import { Button } from "ui"
import Shell from "@/components/shell"

export const metadata: Metadata = {
  title: "My Products"
}

export default async function ProductsPage({
  params
}: {
  params: { storeId: string }
}) {
  return (
    <Shell>
      <Shell.Heading>Products</Shell.Heading>
      <Shell.Description>
        Currently available products in your store.
      </Shell.Description>
      <Shell.Content>
        <Button asChild>
          <Link href="products/new">Add Product</Link>
        </Button>
      </Shell.Content>
    </Shell>
  )
}
