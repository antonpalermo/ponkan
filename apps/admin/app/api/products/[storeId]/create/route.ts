import { currentUser } from "@clerk/nextjs"
import { db, nano } from "database"
import { NextResponse } from "next/server"

import joi from "joi"

const storeFields = joi.object({
  name: joi.string().max(100).required().messages({
    "string.empty": "Product name is required",
    "string.required": "Product name is required",
    "string.max": "Product name is too long"
  }),
  description: joi.string().max(225).optional().allow("").messages({
    "string.max": "Product description is too long"
  })
})

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const body = await req.json()

    const {
      error,
      value: { name, description }
    } = storeFields.validate(body, { abortEarly: false })

    if (error) {
      const errors: Record<string, string> = {}
      error.details.map(e => (errors[e.context.label] = e.message))
      return new NextResponse(JSON.stringify(errors), { status: 400 })
    }

    const generatedId = nano()

    await db
      .insertInto("products")
      .values({
        id: generatedId,
        name,
        description,
        storeId: params.storeId
      })
      .executeTakeFirstOrThrow()

    return NextResponse.json({
      storeId: generatedId,
      message: `Product successfully created`
    })
  } catch (e) {
    console.log("[STORE_CREATE_ERROR] - ", e)
    return new NextResponse(
      "Internal Server Error: Unable to create new store",
      { status: 500 }
    )
  }
}
