const config = {
  name: process.env.AWS_BUKCET_NAME,
  region: process.env.AWS_BUCKET_REGION,
  accessKey: process.env.AWS_IAM_ACCESSKEY,
  secretKey: process.env.AWS_IAM_SECRETKEY,
  nanoAlphabet: process.env.NANOID_CHARACTERS
}

module.exports = config
