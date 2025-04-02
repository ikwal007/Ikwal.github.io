import { FaCss3Alt } from "react-icons/fa";
import {
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoReact,
} from "react-icons/io5";
import { SiPhp, SiTailwindcss } from "react-icons/si";
import { JSX } from "react/jsx-runtime";

interface DataTools {
  name: string;
  describe: string;
  icon: JSX.Element;
}

export const DataTools: DataTools[] = [
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

export default function Tools() {
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

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-4 gap-x-0">
          {DataTools.map((data, index) => (
            <div key={index}>
              <div>
                {data.icon}
                <p className="mt-8 text-lg font-semibold leading-tight text-black">
                  {data.name}
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600">
                  {data.describe}
                </p>
              </div>

              <div className="hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
