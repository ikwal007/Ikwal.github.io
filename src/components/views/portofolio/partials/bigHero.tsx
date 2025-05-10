/*************  ✨ Codeium Command ⭐  *************/
/**
 * bigHero
 *
 * This component renders a big hero element.
 *
 * @returns {React.ReactElement} - The big hero element.
 */

import Image from "next/image";

/******  6d91d1f5-3c76-40d9-84cd-6d99fc047c88  *******/
export default function BigHero() {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hey 👋 I am <br className="block sm:hidden" />
              Muhammad Ikwal Ramadhan
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              "Byte, Laugh, Code: Menyusun Tawa dalam Setiap Baris Kode"
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="https://instagram.com/ikwal_coder"
                title=""
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Instagram
              </a>
            </p>
          </div>

          <div className="relative ">
            <Image
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              width={600}
              height={400}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <Image
              src="/img/model3.png"
              className="relative inset-0 mx-auto w-[70%] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              width={600}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
