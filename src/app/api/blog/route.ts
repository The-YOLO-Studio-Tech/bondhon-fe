import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const blogCategoryId = url.searchParams.get('blogCategoryId') || '';

  let filter: any = {};
  if (blogCategoryId) {
    filter.blogCategoryId = Number(blogCategoryId);
  }

  const data = await prisma.blog.findMany({
    include: {
      category: true,
    },
    where: filter,
  });

  return Response.json(data);
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    // console.log(_);
    const _ = await prisma.blog.create({ data: body });
    return Response.json(_);
  } catch (error) {
    console.log(error)
    return Response.error();
  }
};
