"use client";

import CardArticle from "@/components/organisms/cardArticle";
import CardArticleSkeleton from "@/components/organisms/cardArticleSkeleton";
import { usePost } from "@/contexts/articleContext";

export default function AllArticles() {
  const { posts, loading } = usePost();

  const renderArticles = () => {
    if (loading) {
      return (
        <>
          <CardArticleSkeleton />
          <CardArticleSkeleton />
          <CardArticleSkeleton />
        </>
      );
    }

    if (!posts?.data?.length) {
      return <p className="text-gray-500">{posts.message}</p>;
    }

    return posts.data.map((data) => (
      <CardArticle
        key={data.id}
        id={data.id}
        title={data.title}
        slug={data.slug}
        img={data.img}
        date={data.date}
        category={data.category}
        excerpt={data.excerpt}
        content={data.content}
        creator={data.creator}
      />
    ));
  };

  console.log(posts);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Artikel Terbaru
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Artikel terbaru yang saya tulis
            </p>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
              {renderArticles()}
            </div>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full"></div>

        <div className="flex items-center justify-center mt-8 space-x-3 ">
          <button
            type="button"
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

          <button
            type="button"
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
        </div>
      </div>
    </section>
  );
}
