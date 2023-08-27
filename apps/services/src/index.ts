import express, { Application, Request, Response } from "express"

const main = async () => {
  const app: Application = express()
  const port = process.env.PORT || 5000

  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ message: "server ok" })
  })

  app.listen(port, () => {
    console.log(`express server running on http://localhost:${port}`)
  })
}

main().catch(e => console.log("Internal Server Error:", e))
