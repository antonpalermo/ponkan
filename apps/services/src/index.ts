import express from "express"
import productRoutes from "./routes/products.route"

async function main() {
  // initialize express app
  const app = express()
  const port = process.env.PORT || 5000
  // urlencoded use to parse formdata
  app.use(express.urlencoded({ extended: true }))
  // base router
  const baseRoute = express.Router()
  // use all products routes
  baseRoute.use("/products", productRoutes)
  // consume base route
  app.use("/api", baseRoute)
  // start server and listen to request
  app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
  })
}

main().catch(e => console.log(e))
