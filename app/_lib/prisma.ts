import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

<<<<<<< HEAD
export const db = prisma;
=======
export const db = prisma;
>>>>>>> d354d8fe9e091d7ef400b4ce549d50d050623c4d
