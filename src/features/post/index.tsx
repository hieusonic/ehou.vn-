import { clean } from "@/lib/sanitizeHtml";
import styles from "@/styles/Post.module.css";
import { formatDate } from "@/ultil/date";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Share } from "./Share";
import parse, {
  domToReact,
  Element,
  HTMLReactParserOptions,
  DOMNode
} from "html-react-parser";

const transformLinks = (html: string) => {
  const options: HTMLReactParserOptions = {
    replace: (node: DOMNode) => {
      if (node.type === "tag" && node.name === "a") {
        const el = node as Element;
        const href = el.attribs?.href;

        // Kiểm tra nếu link là domain chính ehou.vn hoặc có slug sau đó
        if (!/\/vi\//.test(href)) {
          // Kiểm tra nếu là một link ngoài (không phải ehou.vn)
          if (!/^https:\/\/(www\.)?ehou\.vn/.test(href)) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {domToReact(el.children as DOMNode[])}
              </a>
            );
          }

          // Nếu là đúng domain gốc ehou.vn hoặc subdomains của ehou.vn thì mới xử lý thêm /vi
          if (
            href === "https://ehou.vn" ||
            href === "https://ehou.vn/" ||
            href === "/"
          ) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {domToReact(el.children as DOMNode[])}
              </a>
            );
          }

          // Nếu có slug (sau https://ehou.vn/), thêm /vi vào
          const finalHref = href.startsWith("/")
            ? `/vi${href}`
            : `https://ehou.vn/vi${href.split("https://ehou.vn")[1]}`;

          return (
            <Link href={finalHref}>{domToReact(el.children as DOMNode[])}</Link>
          );
        }

        // Link ngoài => giữ nguyên hoặc thêm target="_blank"
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {domToReact(el.children as DOMNode[])}
          </a>
        );
      }
    }
  };

  return parse(html, options);
};

export const Post = ({ post }: { post: any }) => {
  const [, setShowStickyBox] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [tocContent, setTocContent] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!post) {
      router.replace("/404");
    }
  }, [post, router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 620;
      const scrollPosition = window.scrollY;
      const footer = document.getElementById("footer");
      const footerOffsetTop = footer ? footer.offsetTop : Infinity;

      if (
        scrollPosition > scrollThreshold &&
        scrollPosition < footerOffsetTop - window.innerHeight
      ) {
        setShowStickyBox(true);
        setShowToc(true);

        const ezTocContainer = document.getElementById("ez-toc-container");
        if (ezTocContainer && !tocContent) {
          const tocClone = ezTocContainer.innerHTML;
          setTocContent(tocClone);
        }
      } else {
        setShowStickyBox(false);
        setShowToc(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocContent]);

  useEffect(() => {
    const scrollToId = (href: string) => {
      const match = href?.match(/#(.+)$/);
      if (match && match[1]) {
        const id = match[1];
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const offset = 150;
          const top = targetElement.getBoundingClientRect().top;
          window.scrollTo({
            top: window.scrollY + top - offset,
            behavior: "smooth"
          });
        }
      }
    };

    const bindAnchorScroll = (selector: string) => {
      const links = document.querySelectorAll(selector);
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const href = link.getAttribute("href") || "";
          scrollToId(href);
        });
      });
    };

    bindAnchorScroll('#ez-toc-container a[href*="#"]');
    bindAnchorScroll('.toc-sticky-box a[href*="#"]');
  }, [post, showToc, tocContent]);

  if (!post) return <p>Không có dữ liệu bài viết.</p>;

  const cleanedContent = clean(post?.content?.rendered || "");
  const parsedContent = transformLinks(cleanedContent);

  return (
    <article className={styles["post"]}>
      <div className={styles["post--share"]}>
        <Share url={post?.slug || "#"} />
      </div>
      <main>
        <div className={styles["post__main"]}>
          <div className={styles["post__heading"]}>
            <h1
              dangerouslySetInnerHTML={{
                __html: clean(post?.title?.rendered)
              }}
            />
            <span>{formatDate(post?.date)}</span>
          </div>

          {/* ✅ Hiển thị nội dung bài viết đã được xử lý */}
          <div className={styles["post__content"]}>{parsedContent}</div>
        </div>

        {!post && (
          <div className={styles["not-found"]}>
            <p>Bài viết này không tồn tại!</p>
            <Link className={styles["back-new"]} href="/tin-tuc">
              Trở về trang tin tức
            </Link>
          </div>
        )}
      </main>
    </article>
  );
};
