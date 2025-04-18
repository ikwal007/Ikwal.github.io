/*************  ✨ Codeium Command ⭐  *************/
/**
 * A simple component that returns the string "aboutMe"
 *
 * @return {React.ReactElement} The component
 */
/******  f08d0047-4ea2-4b49-ad6d-6e46e3c25008  *******/
export default function AboutMe() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Tentang
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
              <span className="relative"> Saya </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <div>
            <img
              className="w-full mx-auto sm:max-w-xs rounded-xl"
              src="img/model1.jpg"
              alt=""
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Hey! Saya Muhammad Ikwal Ramadhan, Pendiri Tengoh Ngoding.
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              Saya adalah seorang backend programmer dengan fokus pada
              pengembangan aplikasi web menggunakan PHP dan framework Laravel.
              Saya senang bekerja dalam tim dan siap untuk berkontribusi dalam
              proyek-proyek yang menantang.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Selain itu, saya juga memiliki minat dalam pemecahan masalah,
              pengembangan produk, dan inovasi teknologi. Saya percaya bahwa
              teknologi dapat membawa dampak positif dalam kehidupan sehari-hari
              dan saya berusaha untuk terus belajar dan berkontribusi dalam
              dunia pengembangan perangkat lunak.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-gray-900">
              Bagaimana saya mencapai tujuan?
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              Saya mewujudkan visi saya dengan berkomitmen untuk terus belajar
              dan mengembangkan kemampuan dalam dunia pemrograman. Saya percaya
              bahwa pendidikan adalah kunci untuk mencapai potensi tertinggi,
              dan saya berusaha untuk menjadi sumber daya yang bermanfaat bagi
              komunitas pengembang. Melalui Tengoh Koding, saya berharap dapat
              memberikan akses kepada orang-orang yang ingin mempelajari
              pemrograman dan teknologi, serta berkolaborasi dalam proyek-proyek
              yang bermanfaat. Saya selalu terbuka untuk belajar dari orang lain
              dan menjalin kerja sama untuk menciptakan solusi teknologi yang
              inovatif dan berguna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
