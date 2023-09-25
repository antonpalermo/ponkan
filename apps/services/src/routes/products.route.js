const express = require("express")
const multer = require("multer")

const handlers = require("../handlers/products.handler")
const middlewares = require("../middlewares/products.middleware")

const router = express.Router()

router.post(
  "/:storeId/:productId/upload",
  // multer middleware.
  multer().array("images"),
  // validates if image mime type is allowed to be processed.
  middlewares.validateMimeType,
  // upload handler
  handlers.upload
)

module.exports = router
