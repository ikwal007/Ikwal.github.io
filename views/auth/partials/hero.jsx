import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Hero = ({img}) => {
  return (
    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src={img}
          alt="model"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative">
        <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
          <h3 className="text-4xl font-bold text-white">
            Bergabunglah dengan saya & <br className="hidden xl:block" />
            pelajarilah pemrograman
          </h3>
          <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <BsCheckLg className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-lg font-medium text-white">
                Belajar Kapan Pun
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <BsCheckLg className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-lg font-medium text-white">
                Materi Gratis
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <BsCheckLg className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-lg font-medium text-white">
                Penyelesaiaan Masalah
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <BsCheckLg className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-lg font-medium text-white">
                Belajar Dimana saja
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
