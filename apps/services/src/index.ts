import express, { Application, Request, Response, Router } from "express"

import { S3Client } from "@aws-sdk/client-s3"
import { s3Config } from "./config"
import busboy from "busboy"

const main = async () => {
  const app: Application = express()
  const port = process.env.PORT || 5000

  const storeRoutes: Router = express.Router()

  const s3 = new S3Client({
    region: s3Config.region,
    credentials: {
      accessKeyId: s3Config.key as string,
      secretAccessKey: s3Config.secret as string
    }
  })

  storeRoutes.post("/:storeId/upload", async (req: Request, res: Response) => {
    const bb = busboy({ headers: req.headers })
    return res.status(200).json({ storeId: req.params.storeId })
  })

  app.use("/api", storeRoutes)

  app.listen(port, () => {
    console.log(`express server running on http://localhost:${port}`)
  })
}

main().catch(e => console.log("Internal Server Error:", e))
