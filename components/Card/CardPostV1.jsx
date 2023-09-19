import formattedDate from "@/utils/dateFormater";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardPostV1 = ({data}) => {
  const { title, createdAt, content, category, id, thumbnailUrl, slug } = data;
  return (
    <div className="overflow-hidden bg-white rounded shadow">
      <div className="p-5">
        <div className="relative">
          <a href="#" title="" className="block aspect-w-4 aspect-h-3">
            <Image
              className="object-cover w-full h-full"
              src={thumbnailUrl}
              width={600}
              height={400}
              layout="responsive"
              alt=""
            />
          </a>

          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
              {category}
            </span>
          </div>
        </div>
        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
        {formattedDate(createdAt)}
        </span>
        <p className="mt-5 text-2xl font-semibold">
          <a href="#" title="" className="text-black">
            {title}
          </a>
        </p>
        <p className="mt-4 text-base text-gray-600">
          Muhammad Ikwal Ramadhan
        </p>
        <Link
          href={`/artikel/detail-post/${slug}`}
          title=""
          className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
        >
          Baca Lebih lanjut
          <AiOutlineRight />
        </Link>
      </div>
    </div>
  );
};

export default CardPostV1;
