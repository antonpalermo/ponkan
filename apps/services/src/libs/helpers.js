const { customAlphabet } = require("nanoid")
const { PutObjectCommand } = require("@aws-sdk/client-s3")

const config = require("./config")

function generateObjectFilename(lenght = 25) {
  const id = customAlphabet(config.nanoAlphabet, lenght)
  return id()
}

async function putS3Object(client, filename, buffer) {
  try {
    const params = {
      Bucket: config.name,
      Key: filename,
      Body: buffer,
      ContentType: "image/webp"
    }
    const command = new PutObjectCommand(params)
    await client.send(command)
  } catch (e) {
    console.log(e.message)
    throw new Error("error uploading images to s3")
  }
}

module.exports = { putS3Object, generateObjectFilename }
