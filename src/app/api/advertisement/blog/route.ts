import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  const data = await prisma.blogPageAdvertisement.findMany();

  return Response.json(data);
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    // console.log(body);
    const _ = await prisma.blogPageAdvertisement.findUnique({
      where: {
        sl: 1,
      },
    });
    console.log(_);

    // const _ = await prisma.blogPageAdvertisement.create({ data: body });
    return Response.json({});
  } catch (error) {
    return Response.error();
  }
};
