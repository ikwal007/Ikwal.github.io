"use client";
import { FaCss3Alt } from "react-icons/fa";
import {
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoReact,
} from "react-icons/io5";
import { SiPhp, SiTailwindcss } from "react-icons/si";
import type DataToolsProps from "@/cardToolsProps";
import CardTools from "@/components/organisms/cardTools";
import Link from "next/link";

export const DataTools: DataToolsProps[] = [
  {
    name: "HTML",
    describe: "Bagian utama untuk menampilkan dokumen",
    icon: <IoLogoHtml5 className="object-cover mx-auto rounded-lg w-28 h-28" />,
  },
  {
    name: "CSS",
    describe: "Bagian utama untuk menampilkan styling dokumen",
    icon: <FaCss3Alt className="object-cover mx-auto rounded-lg w-28 h-28" />,
  },
  {
    name: "Javascript",
    describe: "Bahasa Pendukung untuk saya Buat UI",
    icon: (
      <IoLogoJavascript className="object-cover mx-auto rounded-lg w-28 h-28" />
    ),
  },
  {
    name: "React",
    describe: "Library yang saya gunakan untuk UI",
    icon: <IoLogoReact className="object-cover mx-auto rounded-lg w-28 h-28" />,
  },
  {
    name: "Laravel",
    describe: "Sebagai Framework utama saya dalam membangun web",
    icon: (
      <IoLogoLaravel className="object-cover mx-auto rounded-lg w-28 h-28" />
    ),
  },
  {
    name: "Github",
    describe: "Sebagai repo untuk saya simpan project dan berkolaborasi",
    icon: (
      <IoLogoGithub className="object-cover mx-auto rounded-lg w-28 h-28" />
    ),
  },
  {
    name: "Php",
    describe: "Bahasa Utama yang saya pakai",
    icon: <SiPhp className="object-cover mx-auto rounded-lg w-28 h-28" />,
  },
  {
    name: "Tailwindcss",
    describe: "Sebagai Pendukung styling web saya",
    icon: (
      <SiTailwindcss className="object-cover mx-auto rounded-lg w-28 h-28" />
    ),
  },
];

export default function AllCategorys() {
  const renderArticles = () => {
    // if (loading) {
    //   return (
    //     <>
    //       <CardArticleSkeleton />
    //       <CardArticleSkeleton />
    //       <CardArticleSkeleton />
    //     </>
    //   );
    // }

    // if (!posts?.data?.length) {
    //   return <p className="text-gray-500">{posts.message}</p>;
    // }

    return DataTools.map((data, index) => (
      <Link
        key={index}
        href={`/article/category/${data.name.toString().toLowerCase()}`}
      >
        <CardTools icon={data.icon} name={data.name} />
      </Link>
    ));
  };

  //   console.log(posts);

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
            <div className="grid max-w-md text-center grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-4 lg:max-w-full">
              {renderArticles()}
            </div>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full"></div>
      </div>
    </section>
  );
}
