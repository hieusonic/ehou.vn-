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
export const Qtdlvlh = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=quan-tri-dich-vu-du`, {
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
          home_content?.acf?.ten_nganh || "Quản trị dịch vụ du lịch và lữ hành"
        }
        backgroundImage={
          home_content?.acf?.background || "/snapedit_1702603916913.png "
        }
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "Du lịch đã và đang thể hiện là một trong những ngành kinh tế mũi nhọn của đất nước với nhiều đóng góp vào sự phát triển kinh tế – xã hội nói chung. Nghị quyết số 08-NQ/TW ngày 16/01/2017 của Bộ Chính trị về “Phát triển Du lịch trở thành ngành Kinh tế mũi nhọn” là một bước đột phá lớn cho sự phát triển của Du lịch."
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
            home_content?.acf?.bang_cap?.text_2 ||
            "Cử nhân quản trị dịch vụ du lịch và lữ hành"
          }
          Target={[
            home_content?.acf?.text_1 ||
              "Sau ảnh hưởng của đại dịch Covid-19, ngành Du lịch thế giới đang phục hồi vô cùng mạnh mẽ. Theo dự báo của Economist Intelligence Unit (EIU), sau khi đã ghi nhận mức tăng 60% trong năm 2022, lượng khách du lịch toàn cầu sẽ tiếp tục tăng trưởng 30% trong năm 2023.",
            home_content?.acf?.text_2 ||
              "Du lịch Việt Nam cũng có sự tăng trưởng vượt bậc, ở một số chỉ tiêu còn cao hơn thời điểm trước đại dịch Covid-19. Theo Tổng Cục Du lịch, năm 2022, du lịch Việt Nam đã đón và phục vụ khoảng 104,8 triệu lượt khách, tăng gấp 2,6 lần so với cùng kỳ năm 2021, trong đó có 3,5 triệu lượt khách quốc tế và 101,3 triệu lượt khách nội địa. Số lượng khách du lịch nội địa đã vượt xa với mục tiêu đặt ra là 60 triệu lượt khách, tăng trên 19% so với năm 2019 - thời điểm trước khi đại dịch Covid-19 bùng phát.",
            home_content?.acf?.text_3 ||
              "Cơ hội tốt chỉ thực sự mở ra với những người được trang bị tốt về kỹ năng, kiến thức và đặc biệt là thái độ làm việc. Trong số những người có đủ năng lực thì việc sở hữu tấm bằng Cử nhân về Du lịch sẽ là một lợi thế cạnh tranh rất lớn.",
            home_content?.acf?.text_4 ||
              "Một số cơ sở đào tạo truyền thống thường là những “cánh cổng cao vời vợi” về mặt học thuật và/hoặc về mặt tài chính với nhiều bạn trẻ. Ngược lại “những cánh cổng không cao” có thể là nơi các bạn sẽ tiêu tốn một số năm trong quỹ thời gian thanh xuân nhưng lại không được trang bị đầy đủ các kiến thức, kỹ năng cần thiết và khi tốt nghiệp, tấm bằng đó có thể không được đánh giá cao bởi các nhà tuyển dụng."
          ]}
          location={[
            home_content?.acf?.text_5 ||
              "Tính đến nay, ngành Quản trị Dịch vụ Du lịch và Lữ hành của Trường Đại học Mở Hà Nội đã cung cấp cho Ngành Du lịch hàng chục nghìn nhân lực có chất lượng và tỷ lệ sinh viên có việc làm sau tốt nghiệp từ ngành Quản trị Dịch vụ Du lịch và Lữ hành của Trường Đại học rất cao ",
            home_content?.acf?.text_6 ||
              "<b> Sinh viên ngành quản trị dịch vụ du lịch và lữ hành ra trường làm gì </b>",
            home_content?.acf?.text_7 ||
              "<b> Hướng dẫn viên du lịch: </b> Là công việc thu hút đông đảo giới trẻ quan tâm. Hướng dẫn viên du lịch sẽ được tham gia du lịch cùng với khách hàng và có được nhiều trải nghiệm phong phú.",
            home_content?.acf?.text_8 ||
              "<b> Chuyên viên kinh doanh/Chuyên viên phát triển dịch vụ khách sạn:</b> Công việc này đòi hỏi ứng viên sẽ phải đưa ra các chiến lược kinh doanh cụ thể trong từng giai đoạn kinh tế khác nhau. Hơn thế nữa, bạn sẽ là cầu nối giữa doanh nghiệp đến với khách hàng.",
            home_content?.acf?.text_9 ||
              "<b> Thiết kế tour trong và ngoài nước:</b> Hiện nay, bên cạnh các tour truyền thống thì giới trẻ còn yêu thích các tour dịch vụ mới lạ. Nhân viên thiết kế tour sẽ là người nắm bắt tâm lý khách hàng để đưa ra các gói sản phẩm phù hợp cho doanh nghiệp.",
            home_content?.acf?.text_10 ||
              "<b> Giảng viên về quản trị du lịch: </b> Đối với một số bạn có niềm đam mê với công việc truyền đạt, giảng dạy thì sau khi tốt nghiệp, bạn có thể tiếp tục đam mê khi trở thành giảng viên tại các trường đại học, trường cao đẳng.Chuyên viên tại các sở, Ban ngành về du lịch: Thực hiện các công tác tìm hiểu, đánh giá về nhu cầu cũng như sự đáp ứng của cơ sở vật chất tại các địa điểm du lịch. ",
            home_content?.acf?.text_11 ||
              "<b> Làm việc tại nhà hàng, khách sạn: </b> Bạn có thể tham gia làm việc tại khách sạn với nhiều vị trí như quản lý, nhân viên lễ tân khách sạn, nhân viên phục vụ khách hàng, v.v. "
          ]}
          jobs={[
            home_content?.acf?.text_12 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo",
            home_content?.acf?.text_13 || "Tốt nghiệp Trung cấp",
            home_content?.acf?.text_14 || "Tốt nghiệp Cao Đẳng",
            home_content?.acf?.text_15 || "Tốt nghiệp Đại học",
            home_content?.acf?.text_16 ||
              "Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_17 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Quản trị dịch vụ Du lịch & Lữ hành do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_18 ||
              "Sinh viên ngành Quản trị dịch vụ Du lịch & Lữ hành của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "Mục tiêu đào tạo của ngành <b>Quản trị dịch vụ du lịch và lữ hành</b> là đào tạo sinh viên trở nên năng động, yêu nghề, có đủ kiến thức và văn hóa để theo đuổi nghề nghiệp. Am hiểu và nghiên cứu về địa lý du lịch, văn hóa, tâm lý và tập quán của du khách trong nước và quốc tế, các kỹ năng nghiệp vụ về hướng dẫn du lịch, thiết kế tour, quản lý và điều hành tour, thiết kế và quản trị sự kiện du lịch.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Cơ hội việc làm của ngành này rất có tương lai và có nguồn thu nhập hấp dẫn. Bạn có thể làm hướng dẫn viên du lịch, làm việc tại các sở ban ngành Văn hóa thể thao và du lịch, quản trị du lịch tại các nhà hàng khách sạn lớn, quản lý, sắp xếp tour…"
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/dllhh.png"
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
          "/dllhh.png"
        }
      />
    </>
  );
};
