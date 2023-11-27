import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const menu = url.searchParams.get('menu') || '';
  let filter: any = {};
  if (menu) {
    filter.menu = menu;
  }
  const data = await prisma.blogCategory.findMany({
    where: filter,
  });

  return Response.json(data);
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    // console.log(_);
    const _ = await prisma.blogCategory.create({ data: body });
    return Response.json(_);
  } catch (error) {
    return Response.error();
  }
};
