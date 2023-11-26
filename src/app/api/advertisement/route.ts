import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.advertisement.findMany();
  return Response.json(data);
}

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    // console.log(_);
    const _ = await prisma.advertisement.create({ data: body });
    return Response.json(_);
  } catch (error) {
    return Response.error();
  }
};
