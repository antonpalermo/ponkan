const { S3Client } = require("@aws-sdk/client-s3")
const s3Config = require("./config")

const s3Client = new S3Client({
  credentials: {
    accessKeyId: s3Config.accessKey,
    secretAccessKey: s3Config.secretKey
  },
  region: s3Config.region
})

module.exports = s3Client
