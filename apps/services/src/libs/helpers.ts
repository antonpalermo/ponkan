import { S3Client } from "@aws-sdk/client-s3"

import { customAlphabet } from "nanoid"
import { PutObjectCommand } from "@aws-sdk/client-s3"

import config from "./config"

function generateObjectFilename(lenght = 25) {
  const id = customAlphabet(config.nanoAlphabet, lenght)
  return id()
}

async function putS3Object(client: S3Client, filename: string, buffer: Buffer) {
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
    throw new Error("error uploading images to s3")
  }
}

module.exports = { putS3Object, generateObjectFilename }
