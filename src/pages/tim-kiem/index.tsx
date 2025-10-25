"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

import { NextSeo } from "next-seo";
const Search = dynamic(
  () => import("@/features/Search").then((mod) => mod.Search),
  {
    loading: () => <Loading />
  }
);
const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin tức và thông báo tuyển sinh - Trường Đại học Mở Hà Nội"
        description="Trường Đại học Mở Hà Nội  tuyển sinh năm 2024 - tổng hợp các tin tức tuyển sinh mới nhất của Đại học Mở Hà Nội"
      />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Search />
      </ErrorBoundary>
    </>
  );
};

export default Page;
