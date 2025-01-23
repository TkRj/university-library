import { Redis } from "@upstash/redis";
import config from "@/lib/config";

const redis = new Redis({
  url: config.env.upstash.redis.databaseUrl,
  token:config.env.upstash.redis.token,
})

export default redis;