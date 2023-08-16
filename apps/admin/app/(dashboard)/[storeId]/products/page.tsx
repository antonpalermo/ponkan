import { db } from "database"

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
      {JSON.stringify(products)}
    </div>
  )
}
