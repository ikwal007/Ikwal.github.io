import { WebResponse } from "@/app/models/web.model";
import { ArticleService } from "@/app/services/article.service";
import type { PaginationResult } from "@/pagination/pagination-result.interface";
import type { Article } from "@prisma/client";

export const dynamic = "force-dynamic";

const DEFAULT_LIMIT = 2;

export async function GET(req: Request): Promise<Response> {
  try {
    // 1️⃣ Ambil URL dari request
    const { searchParams, origin } = new URL(req.url);

    // 2️⃣ Ambil query params `page` dan `limit`
    const page = Number(searchParams.get("page") ?? 1);
    const take = Number(searchParams.get("limit") ?? DEFAULT_LIMIT);

    // 3️⃣ Hitung skip untuk database
    const skip = (page - 1) * take;

    // 4️⃣ Base path untuk pagination links
    const route = `${origin}/api/article`;

    const result = await ArticleService.getAllArticleWithPagination({
      page,
      skip,
      take,
      route,
    });

    const webResponse: WebResponse<PaginationResult<Article>> = {
      statusCode: 200,
      message: "Article Geted successfully",
      error: null,
      data: result,
    };

    return Response.json(webResponse, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        { statusCode: 400, error: error.message, data: null },
        { status: 400 }
      );
    }
    return Response.json(new WebResponse(404, "Article not found"));
  }
}
