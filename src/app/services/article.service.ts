import { paginate } from "@/pagination/pagination";
import type { PaginationResult } from "@/pagination/pagination-result.interface";
import { prisma } from "@/prisma";
import type { Article } from "@prisma/client";

export class ArticleService {
  /**
   * Get all articles With Pagination
   */
  static async getAllArticleWithPagination({
    page,
    skip,
    take,
    route,
  }: {
    page: number;
    skip: number;
    take: number;
    route: string;
  }): Promise<PaginationResult<Article>> {
    const result = paginate(
      () =>
        prisma.article.findMany({
          skip,
          take,
          orderBy: { createdAt: "desc" },
          include: { category: true },
        }),
      () => prisma.article.count(),
      {
        page,
        limit: take,
        route: route, // ganti sesuai route kamu
      }
    );

    return result;
  }

  /**
   * Get article by ID
   */
  static async getArticleById(id: string): Promise<Article> {
    const article = await prisma.article.findUnique({
      where: { id },
    });
    if (!article) throw new Error("Article not found");
    return article;
  }
}
