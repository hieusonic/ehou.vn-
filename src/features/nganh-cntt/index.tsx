import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ProgramValues from "@/components/ProgramValues";

const Branch = dynamic(
  () => import("@/components/Branch").then((mod) => mod.Branch),
  {}
);
const BranchNganh = dynamic(
  () => import("@/components/Branch").then((mod) => mod.BranchNganh),
  {}
);
const Notifiy = dynamic(
  () => import("@/components/Notifiy").then((mod) => mod.Notifiy),
  {}
);
const LayoutNganh = dynamic(
  () => import("@/layouts/layoutNganh").then((mod) => mod.LayoutNganh),
  {}
);
export const Cntt = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=cong-nghe-thong-tin`, {
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
  return (
    <>
      <LayoutNganh
        title={
          home_content?.acf?.ten_nganh ||
          "Chương trình Cử nhân trực tuyến ngành Công nghệ thông tin"
        }
        backgroundImage={home_content?.acf?.background || "/nganh-cntt.jpg "}
      >
        <Branch
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "<b> Công nghệ Thông tin (CNTT) </b> là một trong những ngành đóng vai trò quan trọng trong sự phát triển của xã hội. Nó không chỉ thúc đẩy nhanh chóng quá trình tăng trưởng kinh tế, mà còn kéo theo sự biến đổi trong phương thức sáng tạo của cải, trong lối sống và tư duy của con người. Việc nhanh chóng đưa ứng dụng CNTT vào quá trình tự động hóa trong sản xuất kinh doanh là vấn đề đã, đang và sẽ luôn được quan tâm bởi lẽ CNTT có vai trò rất lớn trong mọi hoạt động kinh tế, xã hội - đặc biệt là cuộc Cách mạng Công nghiệp 4.0 đang tác động đến toàn thế giới hiện nay."
          ]}
          training={
            home_content?.acf?.thoi_gian?.text_2 ||
            "Chỉ từ 2.2 - 3 năm (tùy đối tượng đầu vào)"
          }
          Form={
            home_content?.acf?.hinh_thuc?.text_2 ||
            "Tín chỉ (tạo điều kiện thuận lợi tối đa cho người học), học viên có thể lựa chọn thời gian học, giảng viên, tiến độ, chuyên ngành phù hợp với năng lực và nguyện vọng."
          }
          Degree={
            home_content?.acf?.bang_cap?.text_2 || "Cử nhân Công nghệ thông tin"
          }
          Target={[
            home_content?.acf?.text_1 ||
              "Ngành Công nghệ thông tin đào tạo tạo các cử nhân CNTT có trình độ vững vàng, kỹ năng thực hành chuyên sâu để nghiên cứu, xây dựng và phát triển ứng dụng CNTT, đáp ứng nhu cầu phát triển kinh tế - xã hội trong nước và hội nhập quốc tế.",
            home_content?.acf?.text_2 ||
              "Sinh viên học ngành CNTT được trang bị những kiến thức chung về khoa học tự nhiên như toán học cao cấp, đại số tuyến tính và phương pháp tính toán khoa học… và những kiến thức cơ bản về ngành công nghệ thông tin như toán học rời rạc, tin học đại cương, kỹ thuật điện tử số, kiến trúc máy tính, nguyên lý của các hệ điều hành, mạng máy tính, phương pháp lập trình cho máy tính, phương pháp tổ chức và khai thác xử lý dữ liệu trên máy tính phục vụ cho tính toán và lưu trữ…",
            home_content?.acf?.text_3 ||
              "Đặc biệt, sinh viên ngành CNTT được trang bị những kiến thức chuyên ngành chuyên sâu theo các hướng như công nghệ phần mềm, hệ thống thông tin, mạng và bảo mật hệ thống, công nghệ đa phương tiện; đảm bảo sinh viên sau khi tốt nghiệp đáp ứng tốt các vị trí công việc trong thực tiễn, có khả năng chuyên môn hóa cao và năng lực thích ứng với sự phát triển của công nghệ tốt."
          ]}
          location={[
            home_content?.acf?.text_4 ||
              "Kỹ sư an ninh mạng, đảm bảo an toàn thông tin, phòng chống các cuộc tấn công, bảo vệ dữ liệu người dùng",
            home_content?.acf?.text_5 ||
              "Kỹ sư kiểm thử/kiểm soát chất lượng/đảm bảo chất lượng",
            home_content?.acf?.text_6 ||
              "Kỹ sư lập trình/phát triển các hệ thống trên các nền tảng như Desktop, Web, Mobile, IoT, Cloud Computing, Hệ thống nhúng, AI, …",
            home_content?.acf?.text_7 ||
              "Kỹ sư phân tích thiết kế hệ thống, phân tích nghiệp vụ (BA)",
            home_content?.acf?.text_8 ||
              "Kỹ sư quản trị CSDL, làm việc với dữ liệu lớn (Big Data)",
            home_content?.acf?.text_9 ||
              "Nghiên cứu, giảng dạy, huấn luyện CNTT",
            home_content?.acf?.text_10 ||
              "Phân tích, thiết kế, cải tiến trải nghiệm người dùng (UX)",
            home_content?.acf?.text_11 || "Quản lý nhóm, quản lý dự án",
            home_content?.acf?.text_12 ||
              "Quản trị, vận hành hệ thống, hỗ trợ khách hàng…",
            home_content?.acf?.text_13 ||
              "Thiết kế website và các sản phẩm truyền thông khác ",
            home_content?.acf?.text_14 || "Các vị trí công việc khác …"
          ]}
          jobs={[
            home_content?.acf?.text_15 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo",
            home_content?.acf?.text_16 || "Tốt nghiệp Trung cấp",
            home_content?.acf?.text_17 || "Tốt nghiệp Cao Đẳng",
            home_content?.acf?.text_18 || "Tốt nghiệp Đại học",
            home_content?.acf?.text_19 ||
              "Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_20 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Công nghệ thông tin do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_21 ||
              "Sinh viên ngành Công nghệ thông tin của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
          banner={home_content?.acf}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            " <b>Công nghệ thông tin </b> là một ngành học được đào tạo để sử dụng máy tính và các phần mềm máy tính để phân phối và xử lý các dữ liệu thông tin, đồng thời dùng để trao đổi, lưu trữ và chuyển đổi các dữ liệu thông tin dưới nhiều hình thức khác nhau.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Sau khi được đào tạo, sinh viên học ngành này sẽ được trang bị kiến thức nền tảng và chuyên sâu về lĩnh vực công nghệ thông tin để nâng cao tay nghề nhằm phát triển khả năng sửa chữa, xây dựng, cài đặt, bảo trì các phần cứng của máy tính cũng như nghiên cứu và phát triển các ứng dụng phần mềm. Ngoài ra cũng được trang bị kiến thức về an toàn và bảo mật thông tin mạng, một trong những lĩnh vực quan trọng được quan tâm hàng đầu trên thế giới hiện nay."
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/nganhcnttt.png"
        }
        titleprogram={[
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung
            ?.doi_tuong_tuyen_sinh?.tieu_de || "Đối tượng tuyển sinh",
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung?.thoi_gian
            ?.tieu_de || "Thời gian đào tạo",
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung?.hinh_thuc
            ?.tieu_de || "Hình thức tuyển sinh",
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung?.thu_tuc
            ?.tieu_de || "Thủ tục đăng ký"
        ]}
        overview={[""]}
        program={[
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung
            ?.doi_tuong_tuyen_sinh?.text_1 ||
            "Cán bộ, công chức, những người đang làm việc tại các cơ quan, tổ chức, doanh nghiệp nhà nước, tư nhân, lực lượng vũ trang....đã có bằng tốt nghiệp THPT",
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung
            ?.doi_tuong_tuyen_sinh?.text_2 ||
            "Những người đã có bằng tốt nghiệp THPT hoặc tương đương trở lên (TC, CĐ, ĐH,...)",
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung
            ?.doi_tuong_tuyen_sinh?.text_3 ||
            "Sinh viên đang theo tại các trường đại học, cao đẳng."
        ]}
        workjobs={[
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung?.hinh_thuc
            ?.text_1 || "Xét tuyển theo hồ sơ, văn bằng",
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung?.hinh_thuc
            ?.text_2 || "Nhận hồ sơ liên tục trong năm."
        ]}
        worktitle={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung?.thoi_gian
            ?.text_1 ||
          "Thời gian đào tạo: Căn cứ vào hồ sơ, văn bằng của sinh viên nộp trong hồ sơ xét tuyển"
        }
        workjobstitles={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.noi_dung?.thu_tuc
            ?.text_1 ||
          "Bạn vui lòng liên hệ theo hotline 0919.240.116 để được hỗ trợ tư vấn chi tiết về chương trình, lộ trình học và thủ tục đăng ký chương trình đại học từ xa của trường nhé!"
        }
        image={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/nganhcnttt.png"
        }
      />
    </>
  );
};
