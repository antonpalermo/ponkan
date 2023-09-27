const { generateObjectFilename, putS3Object } = require("../libs/helpers")

const config = require("../libs/config")
const client = require("../libs/s3-client")

async function upload(req, res) {
  try {
    const filename = generateObjectFilename()

    for (file of req.files) {
      await putS3Object(client, filename, file.buffer)
      console.log(file.originalname, "uploaded")
    }

    return res.status(200).json({ message: "upload ok" })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
}

module.exports = { upload }
