import Link from "next/link"
import { Metadata } from "next"

import { db } from "database"
import { Button } from "ui"

export const metadata: Metadata = {
  title: "My Products"
}

export default async function ProductsPage({
  params
}: {
  params: { storeId: string }
}) {
  const products = await db
    .selectFrom("products")
    .where("products.storeId", "=", params.storeId)
    .selectAll()
    .execute()

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
