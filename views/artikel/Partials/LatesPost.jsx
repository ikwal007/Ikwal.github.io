import formattedDate from "@/utils/dateFormater";
import Link from "next/link";
import React from "react";

const LatesPost = ({
  lastestPost,
  nextPagination,
  prevPagination,
  page,
  loading,
}) => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Postingan terakhir
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Postingan terbaru dari blog saya
            </p>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            {page !== 1 && (
              <button
                type="button"
                onClick={async () => await prevPagination(lastestPost[0].id)}
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {lastestPost.length - 1 !== 0 && (
              <button
                type="button"
                onClick={async () =>
                  await nextPagination(lastestPost[lastestPost.length - 1].id)
                }
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {loading
            ? <>{com()}{com()}{com()}</>
            : lastestPost.length > 0 &&
              lastestPost.map((post, i) => {
                return (
                  <div
                    key={i}
                    className="overflow-hidden bg-white rounded shadow"
                  >
                    <div className="p-5">
                      <div className="relative">
                        <a
                          href="#"
                          title=""
                          className="block aspect-w-4 aspect-h-3"
                        >
                          <img
                            className="object-cover w-full h-full"
                            src={post.thumbnailUrl}
                            alt=""
                          />
                        </a>

                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                        {formattedDate(post.createdAt)}
                      </span>
                      <span className="mt-5 text-2xl font-semibold">
                        <p href="#" title="" className="text-black">
                          {post.title}
                        </p>
                      </span>
                      <p className="mt-4 text-base text-gray-600">
                        {post.content.slice(0, 50).replace(/<[^>]*>/g, "") +
                          "..."}
                      </p>
                      <Link
                        href={`/artikel/detail-post/${post.slug}`}
                        title=""
                        className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                      >
                        Continue Reading
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          {page !== 1 && (
            <button
              type="button"
              onClick={async () => await prevPagination(lastestPost[0].id)}
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {lastestPost.length - 1 !== 0 && (
            <button
              type="button"
              onClick={async () =>
                await nextPagination(lastestPost[lastestPost.length - 1].id)
              }
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export const com = () => {
  return (
    <div className="overflow-hidden bg-base-200 rounded shadow min-h-[400px] animate-pulse">
      
    </div>
  );
};

export default LatesPost;
