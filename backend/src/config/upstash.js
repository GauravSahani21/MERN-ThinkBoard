
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, "10 s"), 
  analytics: true,
});

export default ratelimit;
export { redis }; 
export { Ratelimit }; 
export { Redis }; 
export { dotenv }; 