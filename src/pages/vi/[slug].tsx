"server only";

import ErrorBoundary from "@/components/ErrorBoundary";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { fetchAuth } from "@/ultil/fetchAuth";
import { fetchSeo } from "@/ultil/seo";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { seoRankMathSlug } from "@/ultil/seoRankMathSlug";
import dynamic from "next/dynamic";
import Layout from "@/layouts";

const Post = dynamic(() => import("@/features/post").then((mod) => mod.Post));
const LayoutPost = dynamic(() =>
  import("@/layouts/layoutPost").then((mod) => mod.LayoutPost)
);
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = process.env.API_URL_EH || "";
  const url = process.env.API_RMS_URL_EH || "";

  const path = "/" + (context.params?.slug || "");

  try {
    // 1️⃣ Gọi API redirect từ WordPress
    const redirectRes = await fetch(
      "https://ehou.aum.edu.vn/wp-json/custom/v1/redirects"
    );
    const redirects = await redirectRes.json();
    const matched = redirects.find((r: any) => {
      const source = r.source.replace(/\/+$/, "");
      const current = path.replace(/\/+$/, "");
      return source === current;
    });

    if (matched) {
      let target = matched.target;

      // ✅ Nếu target không bắt đầu bằng "/vi/", thì thêm vào
      if (!target.startsWith("/vi/")) {
        target = "/vi" + (target.startsWith("/") ? "" : "/") + target;
      }

      return {
        redirect: {
          destination: target,
          permanent: true
        }
      };
    }

    // 3️⃣ Nếu không match, xử lý post như bình thường
    const res = await fetchAuth({
      url: `${api_url}/posts?slug=${context.params?.slug}`,
      revalidate: 3600
    });

    if (!res.ok) {
      throw new Error(`Posts fetch failed with status: ${res.statusText}`);
    }

    const resSeo = await fetchSeo({
      url: `${url}/${context.params?.slug}`,
      revalidate: 3600
    });

    const head = await resSeo.json();
    const posts = await res.json();
    const post = posts ? posts[0] : null;

    return {
      props: { post: post || null, head: head.head || null }
    };
  } catch (error) {
    console.error(error);
    return {
      props: { post: null, head: null }
    };
  }
};

interface IPostPage {
  post: any;
  head: string;
}

const Page = (props: IPostPage) => {
  const { post } = props;
  const getTitleFromMeta = (head: string) => {
    const match = head.match(/<meta\s+property="og:title"\s+content="([^"]*)"/);
    return match ? match[1] : null;
  };

  // Lấy nội dung từ thẻ meta
  const ogTitleContent = props.head ? getTitleFromMeta(props.head) : null;

  return (
    <>
      {props.head && (
        <div>
          <Head>
            {ReactHtmlParser(seoRankMathSlug(props.head))}
            <title>{ogTitleContent}</title>
          </Head>
        </div>
      )}
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        <Post post={post} />
      </ErrorBoundary>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutPost>{page}</LayoutPost>
    </Layout>
  );
};

export default Page;
