"use client";
import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const DraftPosts = dynamic(
  () => import("@/features/draft-post").then((mod) => mod.DraftPosts),
  {
    loading: () => <Loading />
  }
);
const Page = () => {
  return (
    <>
      <DraftPosts />
    </>
  );
};

export default Page;
