import { Request, Response } from "express"

const { prisma } = require("database")
const { generateObjectFilename, putS3Object } = require("../libs/helpers")

const client = require("../libs/s3-client")

async function upload(req: Request, res: Response) {
  const files = req.files

  if (files) {
    throw new Error("No files attached")
  }

  try {
    for (const file of files) {
      // generate filename
      const filename = generateObjectFilename()
      // upload the image to s3
      await putS3Object(client, filename, file.buffer)
      //
      await prisma.images.create({
        data: {
          name: filename,
          product: {
            connect: { id: req.params.productId }
          }
        }
      })
      // console log the message that the file is uploaded
      console.log(file.originalname, "uploaded")
    }

    // return to client that the file is uploaded
    return res.status(200).json({ message: "upload ok" })
  } catch (e) {
    return res.status(500).json({ message: "unable to upload image to s3" })
  }
}

module.exports = { upload }
