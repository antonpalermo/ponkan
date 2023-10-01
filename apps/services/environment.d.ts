declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      AWS_BUKCET_NAME: string;
      AWS_BUCKET_REGION: string;
      AWS_BUCKET_ACCESSKEY: string;
      AWS_BUCKET_SECRETKEY: string;
      CLOUDFRONT_ORIGIN: string;
      CLOUDFRONT_KEY_ID: string;
      CLOUDFRONT_DIST_ID: string;
      CLOUDFRONT_PRIVATE_KEY: string;
      NANOID_CHARACTERS: string;
      PORT?: number;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
