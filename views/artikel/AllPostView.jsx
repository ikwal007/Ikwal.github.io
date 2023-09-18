import React from "react";
import Welcom from "./Partials/Welcom";
import LatesPost from "./Partials/LatesPost";
import Recomandation from "./Partials/Recomandation";
import Category from "./Partials/Category";

const AllPostView = ({ category, lastestPost, rekomendasiForYou, nextPagination, prevPagination, page, loading }) => {
  return (
    <>
      <Welcom  />
      <Category category={category} />
      <LatesPost lastestPost={lastestPost} nextPagination={nextPagination} prevPagination={prevPagination} page={page} loading={loading} />
      <Recomandation rekomendasiForYou={rekomendasiForYou} />
    </>
  );
};

export default AllPostView;