const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
    prodApiEndPoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    },
    databaseUrl: process.env.DATABASE_URL,
    upstash: {
      redis: {
        databaseUrl: process.env.UPSTASH_REDIS_URL!,
        token: process.env.UPSTASH_REDIS_TOKEN!,
      },
      qstash: {
        databaseUrl: process.env.QSTASH_URL!,
        token: process.env.QSTASH_TOKEN!,
      },
    },
    resend:{
      token:process.env.RESEND_TOKEN!,
    }
  },
};

export default config;
