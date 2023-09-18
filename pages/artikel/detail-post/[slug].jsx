import GuestLayout from "@/layouts/guestLayout";
import DetailPostView from "@/views/artikel/DetailPostView";
import axios from "axios";
import React from "react";

export const getServerSideProps = async (context) => {
  const { query } = context;
  const domain = process.env.NEXTDOMAIN;
  const apiPath = `/api/artikel/get-show-detail-artikel?slug=${query.slug}`;
  try {
    const response = await axios.get(domain + apiPath);

    const data = response.data.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return { props: { data: [domain+apiPath] } };
  }
};
const DetailPostPage = ({ data }) => {
  return (
    <GuestLayout>
      <DetailPostView data={data} />
    </GuestLayout>
  );
};

export default DetailPostPage;
