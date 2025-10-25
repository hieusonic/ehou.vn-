import { useEffect } from "react";
import { useModal } from "@/components/ModalContext";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { Loading } from "@/components/Loading";
import { TrackingSession } from "@/components/TrackingSession";

const Header = dynamic(() => import("./header").then((mod) => mod.Header), {
  loading: () => <Loading />
});

const Footer = dynamic(() => import("./footer").then((mod) => mod.Footer), {
  loading: () => <Loading />
});

const BackToTop = dynamic(
  () => import("./components/BackToTop").then((mod) => mod.BackToTop),
  {
    loading: () => <Loading />
  }
);

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { isOpen, onOpen } = useModal();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isOpen && onOpen) {
        onOpen();
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router.pathname, isOpen, onOpen]);

  return (
    <>
      <div className="w-full max-w-[1920px] mx-auto">
        <TrackingSession />
        <Header />
        {children}
        <Box ref={ref} style={{ height: "1px" }} />
        <BackToTop />
        {inView && <Footer />}
      </div>
    </>
  );
};

export default Layout;
