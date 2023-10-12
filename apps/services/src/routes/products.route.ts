import express, { Router } from "express"
import multer from "multer"

import handlers from "../handlers/products.handler"
import middlewares from "../middlewares/products.middleware"

const router: Router = express.Router()

router.post(
  "/:storeId/:productId/upload",
  // multer middleware.
  multer().array("images"),
  // validates if image mime type is allowed to be processed.
  middlewares.validateMimeType,
  // upload handler
  handlers.upload
)

export default router
