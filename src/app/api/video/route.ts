import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  const data = await prisma.video.findMany();

  return Response.json(data);
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    // console.log(_);
    const _ = await prisma.video.create({ data: body });
    return Response.json(_);
  } catch (error) {
    return Response.error();
  }
};
