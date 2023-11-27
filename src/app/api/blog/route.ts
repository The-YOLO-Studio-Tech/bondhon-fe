import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  // const blogCategoryId = url.searchParams.get('blogCategoryId') || '';
  const menu = url.searchParams.get('menu') || '';
  const c_id = url.searchParams.get('c_id') || '';

  let filter: any = {};
  if (menu) {
    // filter.blogCategoryId = Number(blogCategoryId);
    filter.category = {
      menu: menu,
    };
  }
  if (c_id) {
    filter.category = {
      ...filter.category,
      id: Number(c_id),
    };
  }

  const data = await prisma.blog.findMany({
    include: {
      category: true,
      // subCategories: true,
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
    return Response.error();
  }
};
