import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

config()

export const __env = Object.freeze({
  __ENVORONMENT: process.env.NODE_ENV,
  __PORT: process.env.PORT || 5000,
  __PRISMA_CLIENT: new PrismaClient(),
});
 