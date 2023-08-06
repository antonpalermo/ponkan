import { currentUser } from "@clerk/nextjs"
import { db, nano } from "database"
import { NextResponse } from "next/server"

import { z } from "zod"

const StoreSchema = z.object({
  name: z.string().min(3),
  description: z.string().max(225)
})

export async function POST(req: Request) {
  try {
    const { emailAddresses } = await currentUser()
    const { name, description } = await req.json()

    const owner = emailAddresses[0].emailAddress

    const isValidBody = StoreSchema.parse({
      name,
      description
    })

    if (isValidBody) {
      await db
        .insertInto("store")
        .values({
          id: nano(),
          name,
          description,
          owner,
          dateUpdated: new Date()
        })
        .executeTakeFirst()
    } else {
      return new NextResponse("Unable to create store", { status: 400 })
    }

    return NextResponse.json({
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
