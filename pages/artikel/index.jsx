import GuestLayout from "@/layouts/guestLayout";
import AllPostView from "@/views/artikel/AllPostView";
import axios from "axios";
import React, { useState } from "react";

export async function getServerSideProps() {
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
      lastestPost: await getData("http://localhost:3000/api/artikel/get-all-artikel"),
      category: await getData("http://localhost:3000/api/category/get-all-category"),
    },
  };
}

const Artikel = ({ lastestPost, category }) => {
  // const [page, setPage] = useState(1);
  // const [newData, setNewData] = useState(data?.lastestPost || "");
  // const [loading, setLoading] = useState(false);

  console.log(category);

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
