export const s3Config = {
  name: process.env.S3_BUCKET_NAME,
  region: process.env.S3_BUCKET_REGION,
  key: process.env.S3_BUCKET_ACCESS_KEY,
  secret: process.env.S3_BUCKET_SECRET_KEY
}
