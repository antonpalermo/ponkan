import { S3Client } from "@aws-sdk/client-s3"

import s3Config from "@src/libs/config"

const s3Client = new S3Client({
  credentials: {
    accessKeyId: s3Config.accessKey!,
    secretAccessKey: s3Config.secretKey!
  },
  region: s3Config.region
})

export default s3Client
