import React from "react";
import {
  IoLogoLaravel,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoV,
} from "react-icons/io5";
import { SiPhp, SiTailwindcss } from "react-icons/si";

const Tools = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Alat-alat yang saya kuasai
          </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Peralatan yang saya gunakan dalam sehari-hari dalam project
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          <div>
            <SiPhp className="object-cover mx-auto rounded-lg w-28 h-28" />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Php
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Bahasa Utama yang saya pakai
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <IoLogoJavascript className="object-cover mx-auto rounded-lg w-28 h-28" />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              JavaScript
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Bahasa Pendukung untuk saya Buat UI
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <IoLogoHtml5 className="object-cover mx-auto rounded-lg w-28 h-28" />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              HTML5
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Bagian utama untuk menampilkan dokumen
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <IoLogoLaravel className="object-cover mx-auto rounded-lg w-28 h-28" />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Laravel
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Sebagai Framework utama saya dalam membangun web
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <IoLogoReact className="object-cover mx-auto rounded-lg w-28 h-28" />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              React
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Library yang saya gunakan untuk ui
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <SiTailwindcss className="object-cover mx-auto rounded-lg w-28 h-28" />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Tailwindcss
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Sebagai Pendukung styling web
            </p>
          </div>
          
          <div className="hidden lg:block"></div>

          <div>
            <IoLogoGithub className="object-cover mx-auto rounded-lg w-28 h-28" />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Github
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Sebagai repo untuk saya simpan project dan berkolaborasi
            </p>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
