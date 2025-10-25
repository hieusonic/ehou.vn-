export const data_themes = {
  //toàn bộ cấu hình router của web được viết ở đây khi thay đổi file này hãy thay đổi cả cấu trúc file trong thư mục pages tương ứng
  routers: [
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
          title: "Ngành Ngôn Ngữ Anh"
        },

        {
          path: "/nganh-cong-nghe-thong-tin",
          title: "Ngành Công Nghệ Thông Tin"
        },
        {
          path: "/nganh-luat",
          title: "Ngành Luật"
        },
        {
          path: "/nganh-luat-kinh-te",
          title: "Ngành Luật Kinh Tế"
        },
        {
          path: "/nganh-quan-tri-kinh-doanh",
          title: "Ngành Quản Trị Kinh Doanh"
        },
        {
          path: "/nganh-ke-toan",
          title: "Ngành Kế Toán"
        },
        {
          path: "/nganh-tai-chinh-ngan-hang",
          title: "Ngành Tài Chính Ngân Hàng "
        },
        {
          path: "/nganh-thuong-mai-dien-tu",
          title: "Ngành Thương Mại Điện Tử "
        },
        {
          path: "/nganh-quan-tri-khach-san",
          title: "Ngành Quản Trị Khách Sạn "
        },
        {
          path: "/nganh-quan-tri-dich-vu-du-lich-lu-hanh",
          title: "Ngành Quản Trị Dịch Vụ Du Lịch và Lữ Hành "
        }
      ]
    },
    {
      path: "/dang-ky", // the url
      title: "Đăng ký"
    },
    {
      path: "/tin-tuc", // the url
      title: "Tin tức"
    },
    {
      path: "/lich-khai-giang", // the url
      title: "Lịch khai giảng"
    }
  ]
};
