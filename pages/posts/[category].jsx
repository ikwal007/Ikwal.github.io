import GuestLayout from "@/layouts/guestLayout";
import AllPostView from "@/views/Posts/AllPostView";
import { useRouter } from "next/router";
import React from "react";

const PostsPage = () => {
  const router = useRouter();
  return (
    <GuestLayout>
      <AllPostView category={router.query.category?.[0]} />
    </GuestLayout>
  );
};

export default PostsPage;
