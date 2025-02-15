import { PrismaClient } from "@prisma/client";

// @ts-expect-error wtf
const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
