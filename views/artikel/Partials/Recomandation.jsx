import CardPostV2 from "@/components/Card/CardPostV2";
import React from "react";

const Recomandation = ({ rekomendasiForYou }) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Rekomendasi untuk anda
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Postingan yang saya rekomendasikan apabila anda baru mulai belajar
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {rekomendasiForYou &&
            rekomendasiForYou.map((data, i) => (
              <CardPostV2 key={i} data={data} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Recomandation;
