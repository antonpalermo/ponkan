import { NextResponse } from "next/server"

import { db } from "database"

export async function GET(
  request: Request,
  { params }: { params: { storeId: string } }
) {
  if (!params.storeId) {
    return NextResponse.json(
      JSON.stringify({ message: "Store id is required." }),
      { status: 400 }
    )
  }

  try {
    const products = await db
      .selectFrom("products")
      .where("products.storeId", "=", params.storeId)
      .execute()

    return NextResponse.json(products, { status: 200 })
  } catch (e) {
    console.log("[PRODUCTS_GET_ERROR]: ", e)
    return new NextResponse(
      "Internal Server Error: Unable to create new store",
      { status: 500 }
    )
  }
}
