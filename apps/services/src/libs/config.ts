const config = {
  name: process.env.AWS_BUKCET_NAME,
  region: process.env.AWS_BUCKET_REGION,
  accessKey: process.env.AWS_BUCKET_ACCESSKEY,
  secretKey: process.env.AWS_BUCKET_SECRETKEY,
  nanoAlphabet: process.env.NANOID_CHARACTERS
}

export default config
