const express = require("express")
const multer = require("multer")

const router = express.Router()
const upload = multer()

router.use(
  "/:storeId/:productId/upload",
  upload.array("images"),
  async (req, res) => {
    console.log(req.files)
    return res.status(200).json({ message: "sample post" })
  }
)

module.exports = router
