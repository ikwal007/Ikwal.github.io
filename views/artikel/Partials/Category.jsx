import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

const Category = ({category}) => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex-1 text-left lg:text-left mb-10 flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Category
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
            Semua category pada blog ini
          </p>
        </div>
        <div className="grid place-content-evenly grid-cols-1 justify-center gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
          

          {category.length > 0 &&
            category.map((data, i) => (
                <div key={i}>
                {data.icon === "RiJavascriptFill" && <RiJavascriptFill className="object-contain w-auto mx-auto h-14" />}
                {data.icon === "SiPhp" && <SiPhp className="object-contain w-auto mx-auto h-14" />}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Category;