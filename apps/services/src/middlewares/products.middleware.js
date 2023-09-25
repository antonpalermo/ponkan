const { validateBufferMIMEType } = require("validate-image-type")

async function validateMimeType(req, res, next) {
  console.log("middleware: ", req.files)
  next()
}

module.exports = { validateMimeType }
