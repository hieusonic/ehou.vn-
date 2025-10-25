"use client";

import { clean } from "@/lib/sanitizeHtml";
import { useInView } from "react-intersection-observer";
import {
  Box,
  chakra,
  Container,
  Divider,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  VisuallyHidden,
  useColorModeValue,
  AspectRatio
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const [facebookSrc, setFacebookSrc] = useState(
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fehou.vn%3Fref%3Dembed_page&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  );
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      setFacebookSrc(
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fehou.vn%3Fref%3Dembed_page&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      );
    }
  }, [inView]);
  const [home_content, setHomeContent] = useState<any>(null);
  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getHomeContent();
  }, []);

  const footer = [
    home_content?.acf?.footers?.list_1?.desc ||
      `EHOU là một đối tác tuyển sinh của trường Đại học Mở Hà Nội, với mũi nhọn là hệ đào tạo từ xa, chúng tôi mang đến cơ hội học tập linh hoạt. Mọi lúc mọi nơi cho mọi người. EHOU là lựa chọn chất lượng và đáng tin cậy cho bạn`
  ];

  return (
    <>
      <Box bg={"#057cc6"} color={"White"}>
        <Container as={Stack} maxW={"7xl"} py={10}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={{ sm: 20, base: 10 }}
          >
            <Stack align={"flex-start"}>
              <Heading fontSize={"16px"} textTransform={"uppercase"}>
                {home_content?.acf?.footers?.list_1?.title || "Về chúng tôi"}
              </Heading>
              <Divider w={"30px"} borderBottomColor={"#008AFA"} />
              {footer?.map((item, index) => (
                <div
                  style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: clean(item) }}
                />
              ))}
              <Heading fontSize={"16px"} textTransform={"uppercase"} pt="2">
                {home_content?.acf?.footers?.list_1?.title_1 ||
                  "Kết nối với chúng tôi"}
              </Heading>
              <Divider w={"30px"} borderBottomColor={"#008AFA"} />
              <Stack direction={"row"} spacing={2}>
                <SocialButton
                  label={"Facebook"}
                  href={
                    home_content?.acf?.footers?.list_1?.facebook ||
                    "https://www.facebook.com/daihoctuxa.etuaf/"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#2aa4f4"></stop>
                      <stop offset="1" stopColor="#007ad9"></stop>
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    ></path>
                  </svg>
                </SocialButton>
                <SocialButton
                  label={"zalo"}
                  href={
                    home_content?.acf?.footers?.list_1?.zalo ||
                    "https://www.facebook.com/daihoctuxa.etuaf/"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#2962ff"
                      d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                    ></path>
                    <path
                      fill="#eee"
                      d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                    ></path>
                    <path
                      fill="#2962ff"
                      d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                    ></path>
                    <path
                      fill="#2962ff"
                      d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
                    ></path>
                    <path
                      fill="#2962ff"
                      d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                    ></path>
                    <path
                      fill="#2962ff"
                      d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                    ></path>
                  </svg>
                </SocialButton>
                <SocialButton
                  label={"YouTube"}
                  href={
                    home_content?.acf?.footers?.list_1?.youtube ||
                    "https://www.facebook.com/daihoctuxa.etuaf/"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FF3D00"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    ></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                </SocialButton>
                <SocialButton
                  label={"Tiktok"}
                  href={
                    home_content?.acf?.footers?.list_1?.tiktok ||
                    "https://www.tiktok.com/@toiyeunongnghiep"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="dYJkfAQNfP2dCzgdw4ruIa_fdfLpA6fsXN2_gr1"
                      x1="23.672"
                      x2="23.672"
                      y1="6.365"
                      y2="42.252"
                      gradientTransform="translate(.305 -.206)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#4c4c4c"></stop>
                      <stop offset="1" stopColor="#343434"></stop>
                    </linearGradient>
                    <path
                      fill="url(#dYJkfAQNfP2dCzgdw4ruIa_fdfLpA6fsXN2_gr1)"
                      d="M40.004,41.969L8.031,42c-1.099,0.001-1.999-0.897-2-1.996L6,8.031	c-0.001-1.099,0.897-1.999,1.996-2L39.969,6c1.099-0.001,1.999,0.897,2,1.996L42,39.969C42.001,41.068,41.103,41.968,40.004,41.969z"
                    ></path>
                    <path
                      fill="#ec407a"
                      fillRule="evenodd"
                      d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011	c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413	c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413V20.607L29.208,20.607z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1	c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391	C17.213,29.127,17.972,30.274,19.079,30.832z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157	c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923V28.79c-0.007,1.867-1.523,3.379-3.393,3.379	c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391	c0.359,0,0.705,0.056,1.03,0.159v-3.19c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183	c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#81d4fa"
                      fillRule="evenodd"
                      d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848	C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019	c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338	c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069	c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183	C14.374,24.749,17.611,21.463,21.635,21.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </SocialButton>
                <SocialButton
                  label={"Tiktok"}
                  href={
                    home_content?.acf?.footers?.list_1?.tiwwer ||
                    "https://www.tiktok.com/@toiyeunongnghiep"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1"
                      x1="10.341"
                      x2="40.798"
                      y1="8.312"
                      y2="38.769"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#2aa4f4"></stop>
                      <stop offset="1" stopColor="#007ad9"></stop>
                    </linearGradient>
                    <path
                      fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)"
                      d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                    ></path>
                  </svg>
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontSize={"16px"} textTransform={"uppercase"}>
                {home_content?.acf?.footers?.list_2?.title ||
                  "Thông tin liên hệ"}
              </Heading>
              <Divider w={"30px"} borderBottomColor={"#008AFA"} />
              <Box
                dangerouslySetInnerHTML={{
                  __html: clean(
                    home_content?.acf?.footers?.list_2?.desc ||
                      `Trung tâm đào tạo trực tuyến<br/>
                    Văn phòng tư vấn tuyển sinh và nhận hồ sơ:`
                  )
                }}
              />
              <UnorderedList>
                <ListItem>
                  <a
                    href={
                      home_content?.acf?.footers?.list_2?.url_gg_map
                        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(home_content?.acf?.footers?.list_2?.url_gg_map)}`
                        : "https://www.google.com/maps/search/?api=1&query=Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Thành Phố Hà Nội"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {home_content?.acf?.footers?.list_2?.title_1 ||
                      "Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Thành Phố Hà Nội"}
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href={
                      home_content?.acf?.footers?.list_2?.url_gg_map_copy
                        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(home_content?.acf?.footers?.list_2?.url_gg_map_copy)}`
                        : "https://www.google.com/maps/search/?api=1&query=Số 91 Ký Con, phường Nguyễn Thái Bình, Quận 1, TP Hồ Chí Minh"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {home_content?.acf?.footers?.list_2?.title_2 ||
                      "Hồ Chí Minh: Số 91 Ký Con, phường Nguyễn Thái Bình, Quận 1, TP Hồ Chí Minh"}
                  </a>
                </ListItem>
              </UnorderedList>
              <Box
                as={Link}
                prefetch={false}
                href={`tel:${home_content?.acf?.footers?.list_2?.hotline_copy || " 0919.240.116"}`}
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "0.5rem" }}>Hotline:</span>
                {home_content?.acf?.footers?.list_2?.hotline || " 0919.240.116"}
              </Box>

              <Box
                as={Link}
                prefetch={false}
                href={`mailto:${
                  home_content?.acf?.footers?.list_2?.email_copy ||
                  "ehou@gvcn.vn"
                }`}
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "0.5rem" }}> Email:</span>
                {home_content?.acf?.footers?.list_2?.email || "ehou@gvcn.vn"}
              </Box>
              <Heading
                fontSize={"16px"}
                textTransform={"uppercase"}
                marginTop={8}
              >
                {home_content?.acf?.footers?.list_2?.titles ||
                  "Tham gia cộng đồng tư vấn "}
              </Heading>
              <Divider w={"30px"} borderBottomColor={"#008AFA"} />
              <UnorderedList>
                <ListItem>
                  <a
                    href={
                      home_content?.acf?.footers?.list_2?.url_gg_maps
                        ? ` https://www.facebook.com/groups/188848257972099`
                        : " https://www.facebook.com/groups/188848257972099"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {home_content?.acf?.footers?.list_2?.title_1s ||
                      "Tư vấn Đại học từ xa - Khối Luật, Luật kinh tế"}
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href={
                      home_content?.acf?.footers?.list_2?.url_gg_map_copys
                        ? `https://www.facebook.com/groups/tuvandaihoctuxa `
                        : "https://www.facebook.com/groups/tuvandaihoctuxa "
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {home_content?.acf?.footers?.list_2?.title_2s ||
                      "Tư vấn Đại Học Từ Xa - Cơ hội cùng văn bằng thứ 2"}
                  </a>
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading fontSize={"16px"} textTransform={"uppercase"}>
                {home_content?.acf?.footers?.list_3?.title || " "}
              </Heading>
              <Divider w={"30px"} borderBottomColor={"#008AFA"} />
              <Box textAlign="center" width={"300px"}>
                <div ref={ref}>
                  {inView && (
                    <AspectRatio
                      width={{ lg: "370px", base: "250px", md: "250px" }}
                      height={{ lg: "130px", md: "100px", base: "90px" }}
                      ratio={1}
                    >
                      <iframe
                        src={facebookSrc}
                        loading="lazy"
                        width="340"
                        height="500"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </AspectRatio>
                  )}
                </div>
              </Box>

              <Heading fontSize={"16px"} textTransform={"uppercase"} pt="2">
                {home_content?.acf?.footers?.list_3?.title_1 ||
                  " hợp tác tuyển sinh"}
              </Heading>
              <Divider w={"30px"} borderBottomColor={"#008AFA"} />
              <Link prefetch={false} href={"https://timdoitac.aum.edu.vn/"}>
                <Image
                  loading="lazy"
                  src={
                    home_content?.acf?.footers?.list_3?.image ||
                    "/timdoitac.jpg"
                  }
                  alt="Tìm đối tác"
                  width={348}
                  height={232}
                />
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
};
