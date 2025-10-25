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
export const Tcnh = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=tai-chinh-ngan-hang`, {
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
          "Chương Trình Cử Nhân Trực Tuyến Ngành Tài Chính – Ngân Hàng"
        }
        backgroundImage={home_content?.acf?.background || "/Group-16.png "}
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "<b> Tài chính - Ngân hàng</b> là một ngành liên quan tới tất cả các dịch vụ tài chính, lưu thông và vận hành tiền tệ. Ngành Tài chính - Ngân hàng có thể chia thành nhiều lĩnh vực chuyên ngành khác nhau như Ngân hàng, Tài chính bảo hiểm, Tài chính thuế, Phân tích tài chính, Kinh tế học tài chính…. Cụ thể hơn, ngành Tài chính - Ngân hàng là kinh doanh về lĩnh vực tiền tệ thông qua ngân hàng và các công cụ tài chính được ngân hàng phát hành nhằm bảo lãnh, thanh toán, chi trả trong nội địa và quốc tế."
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
            home_content?.acf?.bang_cap?.text_2 || "Cử nhân tài chính ngân hàng"
          }
          Target={[
            home_content?.acf?.text_1 ||
              " <b> Sinh viên ngành tài chính ngân hàng học những gì? </b>",
            home_content?.acf?.text_2 ||
              "Sinh viên ngành Tài chính ngân hàng được cung cấp kiến thức về lĩnh vực phân tích tài chính và đầu tư trên thị trường vốn, thị trường tiền tệ trong quá trình toàn cầu hóa; Nắm bắt kiến thức vững chắc về thực hành các nghiệp vụ trong ngân hàng thương mại hiện đại; có chuyên môn sâu về phân tích, dự báo liên quan đến tài chính, tiền tệ nhằm đưa ra quyết định trong quản trị tài chính. Bên cạnh đó, người học còn được rèn luyện về bản lĩnh và khả năng tự nghiên cứu khi gặp vấn đề mới, đối đầu và ứng biến nhạy bén khi có rủi ro phát sinh liên quan đến tài chính, tiền tệ.",
            home_content?.acf?.text_3 ||
              "Theo học ngành Tài chính ngân hàng, sinh viên được trang bị các môn học từ nền tảng cơ bản đến chuyên sâu về ngành như: Kinh tế vi mô, Kinh tế vĩ mô, Lý thuyết tài chính tiền tệ, Tài chính doanh nghiệp, Tài chính quốc tế, Ngân hàng thương mại, Thị trường chứng khoán, Kế toán doanh nghiệp. Ngoài ra, sinh viên cũng được cung cấp các môn học bổ trợ liên quan đến ngành nghề như Luật tài chính, Luật ngân hàng, Hệ thống tài chính Việt Nam, Hệ thống ngân hàng Việt Nam,...",
            home_content?.acf?.text_4 ||
              " Theo học ngành Tài chính ngân hàng sinh viên được trang bị các kỹ năng mềm cần thiết để đáp ứng nhu cầu của công việc như kỹ năng giao tiếp với khách hàng, giới thiệu sản phẩm, thuyết phục khách hàng, kỹ năng quản lý thời gian, tư duy phản biện, kỹ năng phân tích, làm việc theo nhóm…Bên cạnh đó còn chú trọng đến việc đào tạo tiếng Anh, thực tập nghề tại các ngân hàng, tổ chức tài chính  nhằm đảm bảo cho sinh viên có cơ hội phát triển toàn diện, trở thành cá thể nổi trội khi hòa nhập vào môi trường làm việc đầy năng động và giàu tính cạnh tranh này."
          ]}
          location={[
            home_content?.acf?.text_5 ||
              "<b> Sinh viên ngành tài chính ngân hàng ra trường làm gì? </b>",
            home_content?.acf?.text_6 ||
              "Tài chính - Ngân hàng là một ngành khá rộng liên quan đến tất cả các dịch vụ giao dịch, luân chuyển tiền tệ. Tuy nhiên, vẫn còn không ít thí sinh hiểu rằng học ngành Tài chính ngân hàng ra trường chỉ làm về ngân hàng. Vậy, học ngành Tài chính ngân hàng ra trường làm gì? Tốt nghiệp ngành Tài chính ngân hàng sẽ làm việc ở đâu?",
            home_content?.acf?.text_7 ||
              "<b> Việc luân chuyển tiền tệ luôn được vận hành giống như các mạch máu trong cơ thể vì nó có nhiệm vụ đảm bảo hoạt động cho toàn bộ hệ thống nên dù nền kinh tế có phát triển hay khủng hoảng thì triển vọng việc làm của ngành không bao giờ hạn hẹp. Sau khi tốt nghiệp ngành Tài chính - Ngân hàng có thể đảm nhận các vị trí công việc như: </b>",
            home_content?.acf?.text_8 ||
              "Chuyên viên tín dụng ngân hàng; Chuyên viên kế toán, kiểm toán; Kế toán viên phòng thanh toán quốc tế; Nhân viên kinh doanh ngoại tệ.",
            home_content?.acf?.text_9 ||
              "Chuyên viên kinh doanh tiền tệ; Chuyên viên quản trị tài sản và nguồn vốn; Chuyên viên tài trợ thương mại.",
            home_content?.acf?.text_10 ||
              "Chuyên viên phân tích tài chính doanh nghiệp; Chuyên viên định giá tài sản; Chuyên viên mua bán, sáp nhập doanh nghiệp…",
            home_content?.acf?.text_11 ||
              "Giảng viên ngành Tài chính - Ngân hàng.",
            home_content?.acf?.text_12 ||
              "Với những vị trí nghề nghiệp khá hấp dẫn trên sinh viên tốt nghiệp ngành Tài chính - Ngân hàng có thể dự tuyển vào vị trí ở các cơ quan khác như:",
            home_content?.acf?.text_13 ||
              "Ngân hàng thương mại, công ty chứng khoán, tổ chức tín dụng phi ngân hàng, cơ quan quản lý nhà nước về tài chính ngân hàng và các loại hình doanh nghiệp khác, các tổ chức tài chính.",
            home_content?.acf?.text_14 ||
              "Cục thuế, hải quan, công ty bảo hiểm, công ty tài chính, quỹ tín dụng hoặc làm nhân viên kinh doanh của các công ty...",
            home_content?.acf?.text_15 ||
              "Công ty kiểm toán, quỹ đầu tư, công ty kinh doanh bất động sản, công ty chứng khoán…",
            home_content?.acf?.text_16 ||
              "Công tác tại các trường đại học, cao đẳng, trung cấp"
          ]}
          jobs={[
            home_content?.acf?.text_17 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo",
            home_content?.acf?.text_18 || "Tốt nghiệp Trung cấp",
            home_content?.acf?.text_19 || "Tốt nghiệp Cao Đẳng",
            home_content?.acf?.text_20 || "Tốt nghiệp Đại học",
            home_content?.acf?.text_21 ||
              "Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_22 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Tài chính - Ngân hàng do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_23 ||
              "Sinh viên ngành Tài chính - Ngân hàng của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "<b>Chương trình đào tạo Cử nhân trực tuyến ngành Tài chính - Ngân hàng</b> có nội dung bao hàm đầy đủ kiến thức tương đương với chương trình đại học chính quy ngành Tài chính - Ngân hàng, nhưng được thiết kế theo hướng tiếp cận nghề nghiệp.  Các kiến thức đại cương được tích lũy đồng thời hoặc sau đó, nhằm mở mang nhận thức về bối cảnh để phát triển tư duy tầm rộng.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Chương trình được thiết kế phù hợp với phương pháp học trực tuyến. Người học có thể đăng ký theo tín chỉ, học chậm hơn hay nhanh hơn nhưng phải đảm bảo phần khung bắt buộc theo quy định của Nhà trường."
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/tcnhh.png"
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
          "/tcnhh.png"
        }
      />
    </>
  );
};
