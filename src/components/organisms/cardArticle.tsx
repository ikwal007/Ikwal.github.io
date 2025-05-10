import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { getBadgeTheme } from "@/getBadgeTheme";
import Badge from "../atoms/badge";

interface CardProps {
  id: string;
  title: string;
  slug: string;
  img: string;
  date: string;
  category: string[];
  excerpt: string;
  content: string;
  creator: string;
}

export default function CardArticle({
  id,
  title,
  slug,
  img,
  date,
  category,
  excerpt,
  content,
  creator,
}: CardProps) {
  return (
    <div className="overflow-hidden bg-white rounded shadow">
      <div className="p-5">
        <div className="relative">
          <Link
            href={`/article/detail-post/${slug}`}
            title={title}
            className="block"
          >
            <Image
              className="object-cover w-full h-full"
              src={img}
              width={600}
              height={400}
              alt=""
            />
          </Link>

          <div className="absolute top-4 left-4 gap-2 flex">
            {category.map((item, index) => (
              <Link key={index} href={`/artikel/category/${item}`} title={item}>
                <Badge data={item} theme={getBadgeTheme(item)} />
              </Link>
            ))}
          </div>
        </div>
        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          {date}
        </span>
        <p className="mt-5 text-2xl font-semibold">{title}</p>
        <p className="mt-4 text-base text-gray-600">{creator}</p>
        <p className="mt-4 text-base text-gray-600">{excerpt}</p>
        <Link
          href={`/artikel/detail-post/${slug}`}
          title={title}
          className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
        >
          Baca Lebih lanjut
          <AiOutlineRight />
        </Link>
      </div>
    </div>
  );
}
