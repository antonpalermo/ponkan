import { NextFunction, Request, Response } from "express"
import { validateBufferMIMEType } from "validate-image-type"

async function validateMimeType(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const files = req.files as Express.Multer.File[]

  if (!files) {
    throw new Error("No files attached")
  }

  try {
    for (const file of files) {
      const buffer = await validateBufferMIMEType(file.buffer, {
        originalFilename: file.originalname,
        allowMimeTypes: ["image/png", "image/jpg", "image/jpeg"]
      })

      if (!buffer.ok) {
        return res.status(400).json({ message: "invalid file" })
      }
    }
  } catch (e) {}

  next()
}

export default { validateMimeType }
