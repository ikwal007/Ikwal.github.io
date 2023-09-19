import formattedDate from "@/utils/dateFormater";
import ReactHtmlParser from "react-html-parser";
import React from "react";

const DetailPostView = ({ data }) => {
  const { category, content, title, createdAt, thumbnailUrl } = data;
  const date = formattedDate(createdAt);
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl uppercase">
            {title}
          </h2>
          <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
          <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
            Muhammad Ikwal Ramadhan . {date}
          </span>
        </div>
        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 gap-x-16 gap-y-12">
          <div>
            <div href="#" title="" className="block aspect-w-4 aspect-h-3">
              {thumbnailUrl && (
                <img
                  className="object-cover w-full h-full"
                  src={thumbnailUrl}
                  alt=""
                />
              )}
            </div>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
              {category}
            </span>
            <div className="flex justify-center">
              <article className="mt-4 text-gray-600 prose lg:prose-2xl lg:prose-img:w-full">
                {ReactHtmlParser(content)}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPostView;
