import formattedDate from "@/utils/dateFormater";
import Link from "next/link";
import React from "react";

const CardPostV2 = ({ data }) => {
  const { title, createdAt, content, category, id } = data;
  const newDate = formattedDate(createdAt);
  return (
    <div>
      <div className="block aspect-w-4 aspect-h-3">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg"
          alt="tumbnail"
        />
      </div>
      <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
        {category}
      </span>
      <p className="mt-6 text-xl font-semibold">
        <Link href="#" title="" className="text-black">
          {title}
        </Link>
      </p>
      <p className="mt-4 text-gray-600">
        {content.slice(0, 50).replace(/<[^>]*>/g, "") + "..."}
      </p>
      <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
      <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
        {" "}
        Muhammad Ikwal Ramadhan . {newDate}
      </span>
    </div>
  );
};

export default CardPostV2;
