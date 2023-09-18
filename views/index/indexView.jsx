import React from "react";
import Welcom from "./partials/welcom";
import LatestPosts from "./partials/LatestPosts";


const IndexView = ({lastPost}) => {
  return (
    <>
      <Welcom />
      <LatestPosts lastPost={lastPost} />
    </>
  );
};

export default IndexView;
