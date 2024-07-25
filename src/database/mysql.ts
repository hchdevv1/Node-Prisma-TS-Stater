import { PrismaClient as PrismaClientDB1 } from '../../prisma/generate-client-db1'
import { PrismaClient as PrismaClientDB2 } from '../../prisma/generate-client-db2'

const globalForPrisma1 = globalThis as unknown as { prisma: PrismaClientDB1 }
const globalForPrisma2 = globalThis as unknown as { prisma: PrismaClientDB2 }

export const prisma = globalForPrisma1.prisma || new PrismaClientDB1()
export const prisma2 = globalForPrisma2.prisma || new PrismaClientDB2()

if (process.env.NODE_ENV !== 'production') globalForPrisma1.prisma = prisma
if (process.env.NODE_ENV !== 'production') globalForPrisma2.prisma = prisma2