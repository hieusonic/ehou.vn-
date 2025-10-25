"server only";

import ErrorBoundary from "@/components/ErrorBoundary";
import { fetchSeo } from "@/ultil/seo";
import { replaceSeoRM } from "@/ultil/seoRankMath";
import ReactHtmlParser from "html-react-parser";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Posts = dynamic(() =>
  import("@/features/posts").then((mod) => mod.Posts)
);

interface IPostPage {
  post: any;
  head: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const api_rm_url = process.env.API_RMS_URL_EH || "";
  const api_url = `${api_rm_url}/su-kien`;

  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    if (!res.ok) {
      throw new Error(`Posts fetch failed with status: ${res.statusText}`);
    }
    const head = await res.json();
    return {
      props: {
        head: head?.head || null
      }
    };
  } catch (error) {
    return {
      props: {
        head: null
      }
    };
  }
};

const Page = (props: IPostPage) => {
  const title = "Sự kiện";
  const isShort = false;
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
            {ReactHtmlParser(replaceSeoRM(props.head))}{" "}
            <title>{ogTitleContent}</title>
          </Head>
        </div>
      )}
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Posts isShort={isShort} title={title} />
      </ErrorBoundary>
    </>
  );
};

export default Page;
