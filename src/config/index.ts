import { PrismaClient } from "@prisma/client";
import { loadEnvFile } from "process";

loadEnvFile('./.env');

export const __env = Object.freeze({
  __ENVIRONMENT: process.env.NODE_ENV,
  __PORT: process.env.PORT || 5000,
  __PRISMA_CLIENT: new PrismaClient(),
  __MODEL_USER: new PrismaClient().user,
  __MODEL_HISTORY: new PrismaClient().history,
});
