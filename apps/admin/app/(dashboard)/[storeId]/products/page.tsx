import Link from "next/link"
import { Metadata } from "next"

import { Button } from "ui"

export const metadata: Metadata = {
  title: "My Products"
}

export default async function ProductsPage({
  params
}: {
  params: { storeId: string }
}) {
  return (
    <div>
      <h1>Products</h1>
      <p>All products currently on stock</p>
      <Button asChild>
        <Link href="products/new">Add product</Link>
      </Button>
    </div>
  )
}
