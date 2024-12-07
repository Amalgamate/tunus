export const config = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET!,
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY!,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: process.env.AWS_REGION!,
    s3Bucket: process.env.S3_BUCKET_NAME!,
  },
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY!,
  },
};