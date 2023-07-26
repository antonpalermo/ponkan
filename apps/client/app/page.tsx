import Image from "next/image"
import { db } from "database"

import { Button } from "ui"

export default async function Home() {
  return <div>
    <p className="text-green-500">Sample</p>
    <Button>Sample</Button>
  </div>
}
