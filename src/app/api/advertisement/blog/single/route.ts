import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  const data = await prisma.blogDetailsPageAdvertisement.findMany({
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
    const _ = await prisma.blogDetailsPageAdvertisement.findUnique({
      where: {
        sl: body.sl,
      },
    });
    if (_) {
      const updateInfo = await prisma.blogDetailsPageAdvertisement.update({
        where: {
          sl: body.sl,
        },
        data: body,
      });
      return Response.json(updateInfo);
    } else {
      const createInfo = await prisma.blogDetailsPageAdvertisement.create({ data: body });
      return Response.json(createInfo);
    }
    // return Response.json({});
  } catch (error) {
    return Response.error();
  }
};
