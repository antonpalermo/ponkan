import { currentUser } from "@clerk/nextjs"
import { db, nano } from "database"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { emailAddresses } = await currentUser()
    const { name, description } = await req.json()

    const owner = emailAddresses[0].emailAddress

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
