import { Prisma } from "@prisma/client";
export type ArticleTypeWithCategory = Prisma.ArticleGetPayload<{
  include: { category: true };
}>;
