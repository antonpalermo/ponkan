import { currentUser } from "@clerk/nextjs"
import { db, nano } from "database"
import { NextResponse } from "next/server"

import joi from "joi"

const storeFields = joi.object({
  name: joi.string().max(100).required().messages({
    "string.empty": "Store name is required",
    "string.required": "Store name is required",
    "string.max": "Store name is too long"
  }),
  description: joi.string().max(225).optional().allow("").messages({
    "string.max": "Store description is too long"
  })
})

export async function POST(req: Request) {
  try {
    const { emailAddresses } = await currentUser()

    const body = await req.json()
    const owner = emailAddresses[0].emailAddress

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
      .insertInto("store")
      .values({
        id: generatedId,
        name,
        description,
        owner,
        dateUpdated: new Date()
      })
      .executeTakeFirstOrThrow()

    return NextResponse.json({
      store_id: generatedId,
      message: `${name} successfully created`
    })
  } catch (e) {
    console.log("[STORE_CREATE_ERROR] - ", e)
    return new NextResponse(
      "Internal Server Error: Unable to create new store",
      { status: 500 }
    )
  }
}
