// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchAuth } from "@/ultil/fetchAuth";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  posts: any[];
  totalPosts: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //lấy dữ liệu form từ wordpress
  const type = req?.query?.type || "";
  const page = req?.query?.page || "";
  const api_url = process.env.API_URL_EH || "";
  const idNew = req?.query?.idNew || "";
  const idNotifi = req?.query?.idNotifi || "";

  let posts: any[] = [];
  let totalPosts: string = "0";

  try {
    const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;
    const endPoint = id
      ? `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}&categories=${id}`
      : `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}`;

    const res = await fetchAuth({ url: endPoint, revalidate: 1 });
    let ttp = Number(res.headers?.get("X-WP-Total") || "0");
    if (ttp > 5) {
      totalPosts = String(ttp - 5);
    } else {
      totalPosts = String(ttp);
    }

    const postsNotFeatureImage: any[] = (await res?.json()) || [];
    const filteredPosts = postsNotFeatureImage.filter((post) => {
      const slug = post.slug || "";

      const excludedSlugs = [
        "lich-khai-giang",
        "form-main",
        "form-poup",
        "gioi-thieu",
        "cta"
      ];

      return !excludedSlugs.includes(slug);
    });
    posts =
      filteredPosts?.length > 0
        ? filteredPosts?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image
            };
          })
        : [];
  } catch (error) {
    console.error(error);
  }

  if (req.method === "GET") {
    res.status(200).json({
      posts,
      totalPosts
    });
  }
}
