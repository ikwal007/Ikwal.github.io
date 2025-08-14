import { FaUserSecret } from "react-icons/fa";
import { JSX } from "react/jsx-runtime";

interface DataExperience {
  icon: JSX.Element;
  title: string;
  describe: string;
}

export const DataExperience: DataExperience[] = [
  {
    icon: <FaUserSecret className="w-10 h-10 text-fuchsia-600" />,
    title: "Magang",
    describe: `Pada tahun 2018, saya mengikuti magang selama 3 bulan di Yayasan
                Kesejahteraan Masyarakat Aceh (Yakesma Aceh). Selama periode
                ini, saya terlibat dalam proyek pengembangan aplikasi infak dan
                sedekah yang bertujuan untuk memberdayakan masyarakat.
                Pengalaman ini membantu saya memahami dampak positif teknologi
                dalam lingkungan sosial dan mengasah keterampilan pengembangan
                perangkat lunak.`,
  },
  {
    icon: <FaUserSecret className="w-10 h-10 text-fuchsia-600" />,
    title: "Magang",
    describe: `Saat saya menjalani magang di Badan Pertanahan Nasional (BPN)
                Banda Aceh pada tahun 2023, saya berkesempatan untuk terlibat
                dalam proyek penting, yaitu pengembangan sebuah platform
                pelaporan pengaduan masyarakat. Platform ini bertujuan untuk
                memfasilitasi masyarakat dalam melaporkan permasalahan terkait
                pertanahan. Saya bekerja dalam tim untuk merancang,
                mengembangkan, dan menguji fitur-fitur yang memungkinkan
                pelaporan yang mudah dan efisien. Pengalaman ini memperdalam
                pemahaman saya tentang bagaimana teknologi dapat digunakan untuk
                meningkatkan aksesibilitas dan pelayanan publik.`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Pengalaman
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Riwayat pengalaman saya dalam menempuh mimpi
          </p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          {DataExperience.map((data, index) => (
            <li key={index} className="relative flex items-start">
              <div
                className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                {data.icon}
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  {data.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">{data.describe}</p>
              </div>
            </li>
          ))}

          <li className="relative flex items-start"></li>
        </ul>
      </div>
    </section>
  );
}
