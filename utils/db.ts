import { PrismaClient } from '@/lib/generated/prisma/client';

const prismaClientSingleton = () => {
  const url =
    process.env.DATABASE_URL ?? process.env.DIRECT_URL;
  return new PrismaClient({
    ...(url ? { datasourceUrl: url } : {}),
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;