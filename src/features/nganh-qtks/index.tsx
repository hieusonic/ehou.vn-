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
export const Qtks = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=quan-tri-khach-san`, {
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
          "Chương trình Cử nhân trực tuyến ngành Quản trị khách sạn"
        }
        backgroundImage={home_content?.acf?.background || "/bannerehou.jpg "}
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "<b> Quản trị khách sạn (Hotel Management) </b> là việc tổ chức, quản lý, vận hành hoạt động của khách sạn, ngành học này đưa ra các giải pháp và kế hoạch để quản lý tối ưu các hoạt động trong khách sạn.giúp bạncó kiến thức vững chắc về các quy trình hoạt động của khách sạn,kỹ năng lãnh đạo, quản lý, giải quyết vấn đề và tương tác với khách hàng"
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
            home_content?.acf?.bang_cap?.text_2 || " Cử nhân Quản trị khách sạn"
          }
          Target={[
            home_content?.acf?.text_1 ||
              "Cơ hội tốt chỉ thực sự mở ra với những người được trang bị tốt về kỹ năng, kiến thức và và đặc biệt là thái độ làm việc. Trong số những người có đủ năng lực thì việc sở hữu tấm bằng Cử nhân về Du lịch sẽ là một lợi thế cạnh tranh rất lớn.",
            home_content?.acf?.text_2 ||
              "Đứng trước bước ngoặt lớn của cuộc đời, một trong những băn khoăn lớn đối với các bạn trẻ đang chuẩn bị rời khỏi trường phổ thông là đầu tư thời gian ở đâu để có được tấm bằng Cử nhân về Du lịch có giá trị và phù hợp với năng lực học tập, tài chính cũng như quỹ thời gian của bản thân.",
            home_content?.acf?.text_3 ||
              "Một số cơ sở đào tạo truyền thống thường là những “cánh cổng cao vời vợi” về mặt học thuật và/hoặc về mặt tài chính với nhiều bạn trẻ. Ngược lại “những cánh cổng không cao” có thể là nơi các bạn sẽ tiêu tốn một số năm trong quỹ thời gian thanh xuân nhưng lại không được trang bị đầy đủ các kiến thức, kỹ năng cần thiết và khi tốt nghiệp, tấm bằng đó có thể không được đánh giá cao bởi các nhà tuyển dụng."
          ]}
          location={[
            home_content?.acf?.text_4 ||
              "Tính đến nay, ngành Quản trị Khách sạn của Trường Đại học Mở Hà Nội đã cung cấp cho Ngành Du lịch hàng chục nghìn nhân lực có chất lượng, tỷ lệ sinh viên có việc làm sau tốt nghiệp từ ngành Quản trị Khách sạn của Trường Đại học Mở Hà Nội luôn đạt ở mức cao.",
            home_content?.acf?.text_5 ||
              "<b> Sinh viên ngành quản trị khách sạn ra trường làm gì? </b>",
            home_content?.acf?.text_6 || "<b> Nhân viên lễ tân khách sạn </b>",
            home_content?.acf?.text_7 ||
              "Nhân viên lễ tân là người đại diện cho khách sạn, đón tiếp và giới thiệu dịch vụ khách sạn đến cho khách hàng. Công việc của nhân viên lễ tân khách sạn",
            home_content?.acf?.text_8 ||
              "<b> Giám đốc bộ phận lễ tân/buồng phòng/ẩm thực </b>",
            home_content?.acf?.text_9 ||
              "Giám đốc bộ phận lễ tân/buồng phòng/ẩm thực là người chịu trách nhiệm quản lý và điều hành hoạt động của bộ phận lễ tân, buồng phòng hoặc ẩm thực trong khách sạn.",
            home_content?.acf?.text_10 ||
              "<b> Giám sát nhà hàng khách sạn </b>",
            home_content?.acf?.text_11 ||
              "Giám sát nhà hàng khách sạn là người chịu trách nhiệm quản lý và điều hành hoạt động của nhà hàng và quán bar trong khách sạn.",
            home_content?.acf?.text_12 ||
              "<b> Chuyên viên tổ chức sự kiện </b>",
            home_content?.acf?.text_13 ||
              "Chuyên viên tổ chức sự kiện trong khách sạn là người chịu trách nhiệm tổ chức các sự kiện, hội nghị, hội thảo, hội chợ, lễ kỷ niệm, tiệc tùng,… được diễn ra tại khách sạn.",
            home_content?.acf?.text_14 ||
              "<b> Chuyên viên đào tạo của khách sạn </b>",
            home_content?.acf?.text_15 ||
              "Chuyên viên đào tạo tại khách sạn là người chịu trách nhiệm đào tạo nhân viên cho khách sạn, đào tạo các chương trình đào tạo nội bộ cho các bộ phận khác trong khách sạn.",
            home_content?.acf?.text_16 ||
              "<b> Giảng dạy chuyên ngành liên quan </b>",
            home_content?.acf?.text_17 ||
              "Giáo viên giảng dạy chuyên ngành là những người chuyên về giảng dạy các môn học có liên quan đến ngành quản trị khách sạn như: quản lý khách sạn, kế toán khách sạn, tiếp thị khách sạn, quản lý nhân sự và các môn học khác.",
            home_content?.acf?.text_18 || "<b> Giám đốc khách sạn </b>",
            home_content?.acf?.text_19 ||
              "Giám đốc khách sạn là người chịu trách nhiệm quản lý và điều hành toàn bộ hoạt động của khách sạn."
          ]}
          jobs={[
            home_content?.acf?.text_20 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo",
            home_content?.acf?.text_21 || "Tốt nghiệp Trung cấp",
            home_content?.acf?.text_22 || "Tốt nghiệp Cao Đẳng",
            home_content?.acf?.text_23 || "Tốt nghiệp Đại học",
            home_content?.acf?.text_24 ||
              "Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_25 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Quản trị khách sạn do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_26 ||
              "Sinh viên ngành Quản trị khách sạn của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "Mục tiêu đào tạo của ngành <b>Quản trị khách sạn</b> là đào tạo sinh viên trở nên năng động, yêu nghề, có đủ kiến thức và văn hóa để theo đuổi nghề nghiệp. Am hiểu và nghiên cứu về địa lý du lịch, văn hóa, tâm lý và tập quán của du khách trong nước và quốc tế, các kỹ năng nghiệp vụ về hướng dẫn du lịch, thiết kế tour, quản lý và điều hành tour, thiết kế và quản trị sự kiện du lịch.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Cơ hội việc làm của ngành này rất có tương lai và có nguồn thu nhập hấp dẫn. Bạn có thể làm hướng dẫn viên du lịch, làm việc tại các sở ban ngành Văn hóa thể thao và du lịch, quản trị du lịch tại các nhà hàng khách sạn lớn, quản lý, sắp xếp tour…"
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/qtkss.png"
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
          "/qtkss.png"
        }
      />
    </>
  );
};
