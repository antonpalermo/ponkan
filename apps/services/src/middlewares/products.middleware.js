const { validateBufferMIMEType } = require("validate-image-type")

async function validateMimeType(req, res, next) {
  if (!req.files) {
    throw new Error("No files attached")
  }

  for (file of req.files) {
    const buffer = await validateBufferMIMEType(file.buffer, {
      originalFilename: file.originalname,
      allowMimeTypes: ["image/png", "image/jpg", "image/jpeg"]
    })

    if (!buffer.ok) {
      return res.status(400).json({ message: "invalid file" })
    }
  }

  next()
}

module.exports = { validateMimeType }
