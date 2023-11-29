import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  const data = await prisma.langingPageAdvertisement.findMany({
    include: {
      advertisement: true,
      // subCategories: true,
    },
  });

  return Response.json(data);
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const _ = await prisma.langingPageAdvertisement.findUnique({
      where: {
        sl: body.sl,
      },
    });
    if (_) {
      const updateInfo = await prisma.langingPageAdvertisement.update({
        where: {
          sl: body.sl,
        },
        data: body,
      });
      return Response.json(updateInfo);
    } else {
      const createInfo = await prisma.langingPageAdvertisement.create({ data: body });
      return Response.json(createInfo);
    }
    // return Response.json({});
  } catch (error) {
    return Response.error();
  }
};
