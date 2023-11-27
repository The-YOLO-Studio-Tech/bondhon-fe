import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const PATCH = async (req: Request, { params }: { params: { id: string | any } }) => {
  try {
    const { id } = params;
    const body = await req.json();
    // console.log(body);
    const updateInfo = await prisma.video.update({
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

export const DELETE = async (_req: Request, { params }: { params: { id: string | any } }) => {
  try {
    const { id } = params;
    // console.log(id);
    await prisma.video.delete({
      where: {
        id: id * 1,
      },
    });
    return Response.json({ status: 'delete' });
  } catch (error: any) {
    return Response.json(error?.meta, {
      status: 500,
    });
  }
};
