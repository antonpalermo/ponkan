const express = require("express")
const multer = require("multer")

async function main() {
  // initialize express app
  const app = express()
  const port = process.env.PORT || 5000
  // urlencoded use to parse formdata
  app.use(express.urlencoded({ extended: true }))

  app.get("/", (_, res) => {
    return res.status(200).json({ status: "ok" })
  })

  app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
  })
}

main().catch(e => console.log(e))
