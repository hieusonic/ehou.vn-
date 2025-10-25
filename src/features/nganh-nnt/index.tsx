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
export const Nnt = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ngon-ngu-trung`, {
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
          "Chương trình Cử nhân trực tuyến ngành Ngôn ngữ Trung"
        }
        backgroundImage={
          home_content?.acf?.background ||
          "/tu-vung-tieng-anh-chuyen-nganh-luat.jpg "
        }
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "Nhiệm vụ của Ngành Ngôn ngữ Trung – Trường Đại học Mở Hà Nội là đào tạo nên những cử nhân tiếng Trung có đủ kiến thức, kỹ năng, phẩm chất chính trị, tác phong nghề nghiệp và sức khoẻ để có thể làm việc một cách hiệu quả trong các lĩnh vực chuyên môn có sử dụng tiếng Trung, đáp ứng được yêu cầu của xã hội trong quá trình hội nhập quốc tế."
          ]}
          training={
            home_content?.acf?.thoi_gian?.text_2 ||
            " Chỉ từ 2.2 - 3 năm (tùy đối tượng đầu vào)"
          }
          Form={
            home_content?.acf?.hinh_thuc?.text_2 ||
            "Tín chỉ (tạo điều kiện thuận lợi tối đa cho người học), học viên có thể lựa chọn thời gian học, giảng viên, tiến độ, chuyên ngành phù hợp với năng lực và nguyện vọng."
          }
          Degree={
            home_content?.acf?.bang_cap?.text_2 || "Cử nhân ngôn ngữ Trung"
          }
          Target={[
            home_content?.acf?.text_1 ||
              "Cử nhân tốt nghiệp ngành Ngôn ngữ Trung Trường Đại học Mở Hà Nội có khả năng: \n Ngành Ngôn ngữ Trung Quốc là ngành như thế nào? \n Ngành Ngôn ngữ Trung Quốc trang bị cho sinh viên: \n - Kiến thức về ngôn ngữ, văn hóa, văn học, đất nước học Trung Quốc; \n - Kiến thức về biên, phiên dịch trong các lĩnh vực dịch thuật ngoại giao, chính trị, kinh tế, giáo dục, y tế, công nghệ, du lịch, báo chí, pháp luật. \n - Các kỹ năng, kỹ xảo trong biên, phiên dịch. \n - Năng lực trình bày, phân tích mạch lạc và có phương pháp (bằng văn bản hay ngôn ngữ nói) với từ vựng và thuật ngữ phù hợp các nội dung chuyên môn bằng tiếng Trung Quốc. \n - Ngôn ngữ Trung Quốc là một ngành học giúp sinh viên  nắm vững và vận dụng các kiến thức cơ bản về lý luận chính trị, triết học, xã hội học, cơ sở văn hóa Việt Nam, ngôn ngữ học, tiếng Việt, lịch sử văn minh thế giới, lịch sử tư tưởng Phương Đông và Việt Nam v.v... Các kiến thức cơ sở về ngữ âm, ngữ nghĩa, ngữ dụng, ngữ pháp, ngôn ngữ và văn hóa Trung Quốc, văn học Trung Quốc; các kiến thức chuyên ngành như lý thuyết dịch, thực hành dịch, và các năng lực biên phiên dịch chuyên sâu ở các cấp độ phù hợp với trình độ đại học về ngôn ngữ Trung Quốc "
          ]}
          location={[
            home_content?.acf?.text_2 ||
              "- Cử nhân chuyên ngành Ngôn ngữ Trung Quốc: có thể tham gia làm việc trong các cơ quan Nhà nước hoặc các doanh nghiệp liên quan đến lĩnh vực đối ngoại, truyền thông, kinh tế, thương mại, du lịch … \n - Có khả năng làm việc tại các cơ quan đại diện các tổ chức quốc tế, các công ty mà tiếng Trung Quốc là ngôn ngữ làm việc chính thức, hoặc có mối liên lệ thường xuyên với các quốc gia, vùng lãnh thổ sử dụng tiếng Trung Quốc như: Trung Quốc, Đài Loan, Hồng Kông, Ma Cao, Singapore, v.v...  \n - Làm việc ở các cơ quan quản lý có liên quan đến công tác đối ngoại, làm việc tại các công ty nước ngoài, các công ty liên doanh mà tiếng Trung Quốc được sử dụng thường xuyên… \n - Làm biên - phiên dịch trong các lĩnh vực dịch thuật ngoại giao, thương mại, giáo dục, y tế, báo chí, truyền thông, du lịch… \n - Biên tập các bản tin tiếng Trung cho đài truyền hình, đài phát thanh hoặc các công ty truyền thông. \n - Giảng dạy tiếng Trung Quốc tại các trường Đại học, Cao đẳng, Trung học chuyên nghiệp, THPT hoặc THCS nơi có bộ môn tiếng Trung Quốc. \n - Nghiên cứu khoa học tại các Viện nghiên cứu có lĩnh vực nghiên cứu thường xuyên là Ngôn ngữ Trung Quốc."
          ]}
          jobs={[
            home_content?.acf?.text_3 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo \n Tốt nghiệp Trung cấp \n  Tốt nghiệp Cao Đẳng \n Tốt nghiệp Đại học \n Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_4 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Luật do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị. \n Sinh viên ngành Ngôn ngữ Trung của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước. \n Đăng ký xét tuyển không cần thiết "
          ]}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "<b>Chương trình đào tạo Cử nhân trực tuyến Luật học</b>",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Chương trình học :  Sinh viên sẽ được học chuyên sâu về luật pháp, được đào tạo phán đoán sự việc, được học các phương pháp như phương pháp vận dụng, phương pháp xử lý một vấn đề, cách thức giúp người dân hay cơ quan đơn vị xử lý vấn đề pháp luật,...Các kiến thức đại cương được tích lũy đồng thời hoặc sau đó, nhằm mở mang nhận thức về bối cảnh để phát triển tư duy tầm rộng."
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/luatt.png"
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
          "/luatt.png"
        }
      />
    </>
  );
};
