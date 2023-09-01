import GuestLayout from "@/layouts/guestLayout";
import AllPostView from "@/views/Posts/AllPostView";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  return <GuestLayout children={<AllPostView slug={router.query.slug?.[0]} />} />;
};

export default Index;
