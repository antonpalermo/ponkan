import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}
