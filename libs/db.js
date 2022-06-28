import { PrismaClient } from '@prisma/client';

let prisma

//Singleton

console.log(process.env.DATABASE_URL);

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient()
    }
    prisma = globalThis.prisma
}

export { prisma }