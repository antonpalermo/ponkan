import Image from "next/image"
import { db } from "database"

export default async function Home() {
  const names = await db.selectFrom("sample").select(["id", "name"]).execute()

  return <div className="text-green-500">{JSON.stringify(names)}</div>
}
