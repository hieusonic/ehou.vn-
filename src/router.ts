export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];

export const menus = [
  {
    path: "/", // the url
    title: "Trang chủ"
  },
  {
    path: "/gioi-thieu", // the url
    title: "Giới thiệu"
  },

  {
    path: "#", // the url
    title: "Ngành học",
    childs: [
      {
        path: "/nganh-ngon-ngu-anh",
        title: "Ngôn Ngữ Anh"
      },

      {
        path: "/nganh-cong-nghe-thong-tin",
        title: "Công Nghệ Thông Tin"
      },
      {
        path: "/nganh-luat",
        title: "Luật"
      },
      {
        path: "/nganh-luat-kinh-te",
        title: "Luật Kinh Tế"
      },
      {
        path: "/nganh-quan-tri-kinh-doanh",
        title: "Quản Trị Kinh Doanh"
      },
      {
        path: "/nganh-ke-toan",
        title: "Kế Toán"
      },
      {
        path: "/nganh-tai-chinh-ngan-hang",
        title: "Tài Chính Ngân Hàng "
      },
      {
        path: "/nganh-thuong-mai-dien-tu",
        title: "Thương Mại Điện Tử "
      },
      {
        path: "/nganh-quan-tri-khach-san",
        title: "Quản Trị Khách Sạn "
      },
      {
        path: "/nganh-quan-tri-dich-vu-du-lich-lu-hanh",
        title: "Quản Trị Dịch Vụ Du Lịch và Lữ Hành "
      },
      {
        path: "/nganh-ngon-ngu-trung",
        title: "Ngôn Ngữ Trung Quốc"
      }
    ]
  },
  {
    path: "/kiem-dinh-chat-luong", // the url
    title: "Kiểm định chất lượng"
  },
  {
    path: "/hoc-thu", // the url
    title: "Học thử"
  },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức",
    childs: [
      {
        path: "/tin-tuyen-sinh",
        title: "Tin tuyển sinh"
      },

      {
        path: "/tu-van-chon-nganh",
        title: "Tư vấn chọn ngành"
      },
      {
        path: "/tu-van-huong-nghiep",
        title: "Tư vấn hướng nghiệp"
      },

      {
        path: "/su-kien",
        title: "Sự kiện"
      },
      {
        path: "/thong-bao",
        title: "Thông báo"
      }
    ]
  },
  {
    path: "/lien-he", // the url
    title: "Liên hệ "
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Khai giảng"
  }
];
