import React from "react";

const Welcom = ({category}) => {
  return (
    <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight capitalize">
            Selamat datang di Blog Page tentang {category}
          </h2>
          <p className="mt-6 text-lg text-gray-900">
            Semoga web site ini dapat membantu anda semua yang sedang belajar pemrograman
          </p>
        </div>
      </div>

      <div className="container mx-auto 2xl:px-12">
        <img
          className="w-full mt-6"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Welcom;
