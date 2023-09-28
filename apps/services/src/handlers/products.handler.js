const { prisma } = require("database")
const { generateObjectFilename, putS3Object } = require("../libs/helpers")

const client = require("../libs/s3-client")

async function upload(req, res) {
  try {
    for (file of req.files) {
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
    return res.status(500).json({ message: e.message })
  }
}

module.exports = { upload }
