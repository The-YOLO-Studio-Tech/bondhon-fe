import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTest() {
  try {
    const test = await prisma.test.findMany();
    return { test };
  } catch (error) {
    return { error };
  }
}
