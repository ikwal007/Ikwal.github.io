import GuestLayout from "@/layouts/guestLayout";
import AllPostView from "@/views/artikel/AllPostView";
import axios from "axios";
import React, { useState } from "react";

export async function getServerSideProps() {
  const domain  = process.env.NEXTDOMAIN;
  const getData = async (api) => {
    try {
      const res = await axios.get(api);
      const data = res.data.data;
      return data;
    } catch (error) {
      []
    }
  };
  return {
    props: {
      lastestPost: await getData(`${domain}/api/artikel/get-all-artikel`),
      category: await getData(`${domain}/api/category/get-all-category`),
    },
  };
}

const Artikel = ({ lastestPost, category }) => {

  return (
    <GuestLayout>
      <AllPostView
        lastestPost={lastestPost}
        rekomendasiForYou={lastestPost}
        category={category}
      ></AllPostView>
    </GuestLayout>
  );
};

export default Artikel;
