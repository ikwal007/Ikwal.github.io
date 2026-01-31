import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import Badge from "../atoms/badge";
import { getBadgeTheme } from "@/getBadgeTheme";
import type { ArticleTypeWithCategory } from "@/types/ArticleTypeWithCategory";

/**
 * CardArticle
 *
 * Presentational component for displaying article summary.
 * Assumes article.category is included from Prisma query.
 */
export default function CardArticle(article: ArticleTypeWithCategory) {
  console.log(article);

  const { slug, articleTitle, imgUrl, category, createdAt } = article;

  return (
    <div className="overflow-hidden bg-white rounded shadow">
      <div className="p-5">
        {/* Image */}
        <div className="relative">
          <Link
            href={`/article/detail-post/${slug}`}
            title={articleTitle}
            className="block"
          >
            <Image
              className="object-cover w-full h-60"
              src={imgUrl}
              width={600}
              height={400}
              alt={articleTitle}
            />
          </Link>

          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 left-4 flex gap-2">
              <Link
                href={`/article/category/${category.slug}`}
                title={category.name}
              >
                <Badge
                  data={category.name}
                  theme={getBadgeTheme(category.slug)}
                />
              </Link>
            </div>
          )}
        </div>

        {/* Meta */}
        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          {new Date(createdAt).toLocaleDateString("id-ID")}
        </span>

        {/* Title */}
        <p className="mt-5 text-2xl font-semibold">{articleTitle}</p>

        {/* Read more */}
        <Link
          href={`/article/detail-post/${slug}`}
          className="inline-flex items-center mt-5 text-base font-semibold text-blue-600 border-b-2 border-transparent hover:border-blue-600"
        >
          Baca lebih lanjut
          <AiOutlineRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
