import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

export default function NewArticle() {
  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                SEBUAH MEDIA UNTUK PEMBELAJAR
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Terhubung & belajar dari saya
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Kembangkan karir Anda dengan cepat dengan mentor yang tepat.
              </p>

              <Link
                href="/auth/signup"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Join for free
                <BsArrowRightCircle className="ml-3 w-6 h-6" />
              </Link>

              <p className="mt-5 text-gray-600">
                Already joined us?{" "}
                <Link
                  href="/auth/signin"
                  title=""
                  className="text-black transition-all duration-200 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>

            <div>
              <img
                className="w-full hidden lg:flex"
                src="/img/bg1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
