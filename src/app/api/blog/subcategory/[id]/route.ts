import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const DELETE = async (_req: Request, { params }: { params: { id: string | any } }) => {
  try {
    const { id } = params;
    await prisma.blogSubCategory.delete({
      where: {
        id: id * 1,
      },
    });
    return Response.json({ status: 'delete' });
  } catch (error: any) {
    // console.log(error, 5555);
    return Response.json(error?.meta, {
      status: 500,
    });
  }
};

export const PATCH = async (req: Request, { params }: { params: { id: string | any } }) => {
  try {
    const { id } = params;
    const body = await req.json();
    // console.log(body);
    const updateInfo = await prisma.blogSubCategory.update({
      where: {
        id: id * 1,
      },
      data: body,
    });
    return Response.json(updateInfo);
  } catch (error: any) {
    // console.log(error);
    return Response.json(error?.meta, {
      status: 500,
    });
  }
};
