import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

export async function GET() {
  return Response.json({});
}

export const POST = async (req: Request) => {
  const body = await req.json();
  // console.log(_);
  const _ = await prisma.blogCategory.create({ data: body });
  console.log(_);

  return NextResponse.json(_);
};
