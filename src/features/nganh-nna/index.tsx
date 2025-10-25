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
export const Nna = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ngon-ngu-anh`, {
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
          ".Chương trình Cử nhân trực tuyến ngành Ngôn ngữ Anh"
        }
        backgroundImage={home_content?.acf?.background || "/Group-39.png "}
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              " .Nhiệm vụ của <b> Ngành Ngôn ngữ Anh </b> – Trường Đại học Mở Hà Nội là đào tạo nên những cử nhân tiếng Anh có đủ kiến thức, kỹ năng, phẩm chất chính trị, tác phong nghề nghiệp và sức khoẻ để có thể làm việc một cách hiệu quả trong các lĩnh vực chuyên môn có sử dụng tiếng Anh, đáp ứng được yêu cầu của xã hội trong quá trình hội nhập quốc tế."
          ]}
          training={
            home_content?.acf?.thoi_gian?.text_2 ||
            "Chỉ từ 2.2 - 3 năm (tùy đối tượng đầu vào)"
          }
          Form={
            home_content?.acf?.hinh_thuc?.text_2 ||
            "Tín chỉ (tạo điều kiện thuận lợi tối đa cho người học), học viên có thể lựa chọn thời gian học, giảng viên, tiến độ, chuyên ngành phù hợp với năng lực và nguyện vọng. "
          }
          Degree={home_content?.acf?.bang_cap?.text_2 || "Cử nhân ngôn ngữ Anh"}
          Target={[
            home_content?.acf?.text_1 ||
              "<b> Cử nhân tốt nghiệp ngành Ngôn ngữ Anh Trường Đại học Mở Hà Nội có khả năng: </b>",
            home_content?.acf?.text_2 ||
              "Ứng dụng những kiến thức thu nhận được trong quá trình đào tạo cùng với những tri thức thông tin cá nhân tự trang bị vào các công việc biên - phiên dịch cũng như giảng dạy tiếng Anh.",
            home_content?.acf?.text_3 ||
              "Biên phiên dịch Anh-Việt, Việt Anh trong các công tác đối ngoại, thương mại, đầu tư, văn phòng, du lịch, v.v...",
            home_content?.acf?.text_4 ||
              "Am hiểu lịch sử, văn hóa, xã hội Việt Nam, có kiến thức về lịch sử, văn hóa, xã hội của các nước nói tiếng Anh.",
            home_content?.acf?.text_5 ||
              "Có khả năng tiếp cận kiến thức, thông tin đương đại thông qua tiếng Anh để cập nhật, nâng cao hiểu biết và kỹ năng chuyên môn cũng như trong cuộc sống.",
            home_content?.acf?.text_6 ||
              "Có khả năng tự học và học tập liên tục.",
            home_content?.acf?.text_7 ||
              "Cử nhân tốt nghiệp ngành Ngôn ngữ Anh Trường Đại học Mở Hà Nội phải có năng lực thực hành tiếng Anh (Nghe, Nói, Đọc, Viết) đạt bậc 5 theo Khung năng lực ngoại ngữ 6 bậc của Việt Nam, tương đương cấp độ C1 theo Khung tham chiếu Châu  u."
          ]}
          location={[
            home_content?.acf?.text_8 ||
              "Sau khi ra trường, Cử nhân tốt nghiệp ngành Ngôn ngữ Anh Trường Đại học Mở Hà Nội có thể tham gia làm việc trong các cơ quan Nhà nước hoặc các doanh nghiệp liên quan đến lĩnh vực đối ngoại, truyền thông, kinh tế, thương mại, du lịch, các cơ quan đại diện của nước ngoài, các tổ chức quốc tế, các công ty, v.v. Đặc biệt còn có thể tham gia giảng dạy tiếng Anh tại các đơn vị hoạt động trong lĩnh vực giáo dục – đào tạo.",
            home_content?.acf?.text_9 ||
              "Trong quá trình học tập tại Trường Đại học Mở Hà Nội, sinh viên ngành Ngôn ngữ Anh sẽ có nhiều cơ hội được theo học các ngành học khác tại Trường Đại học Mở Hà Nội như các ngành thuộc khối Kinh tế, Luật, Du lịch... theo hình thức Song bằng. Cử nhân tiếng Anh tốt nghiệp Trường Đại học Mở Hà Nội cũng có nhiều thuận lợi để theo học các chương trình đào tạo Thạc sĩ và Tiến sĩ ngành Ngôn ngữ Anh – Trường Đại học Mở Hà Nội. "
          ]}
          jobs={[
            home_content?.acf?.text_10 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo",
            home_content?.acf?.text_11 || "Tốt nghiệp Trung cấp",
            home_content?.acf?.text_12 || "Tốt nghiệp Cao Đẳng",
            home_content?.acf?.text_13 || "Tốt nghiệp Đại học",
            home_content?.acf?.text_14 ||
              "Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_15 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Ngôn ngữ Anh do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_16 ||
              "Sinh viên ngành Ngôn ngữ Anh của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "<b>Chương trình đào tạo Cử nhân trực tuyến ngành Ngôn Ngữ Anh</b> có nội dung bao hàm đầy đủ kiến thức tương đương với chương trình đại học chính quy ngành Ngôn Ngữ Anh, nhưng được thiết kế theo hướng tiếp cận nghề nghiệp.  Các kiến thức đại cương được tích lũy đồng thời hoặc sau đó, nhằm mở mang nhận thức về bối cảnh để phát triển tư duy tầm rộng.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Chương trình được thiết kế phù hợp với phương pháp học trực tuyến. Người học có thể đăng ký theo tín chỉ, học chậm hơn hay nhanh hơn nhưng phải đảm bảo phần khung bắt buộc theo quy định của Nhà trường"
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/nnaa.png"
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
          "/nnaa.png"
        }
      />
    </>
  );
};
