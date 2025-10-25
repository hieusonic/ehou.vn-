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
export const Luat = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=luat`, {
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
          "Chương trình Cử nhân trực tuyến ngành Luật học"
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
              "Chương trình đào tạo trực tuyến <b> ngành Luật </b> của Trường Đại học Mở Hà Nội cung cấp cho sinh viên kiến thức chuyên môn và năng lực nghề nghiệp về ngành luật. Đồng thời, sinh viên được trang bị kiến thức pháp lý chuyên sâu về dân sự và hành chính cũng như một số kiến thức cơ bản cần thiết về kinh tế, quản trị, xã hội. Bên cạnh đó, sinh viên được rèn luyện các kỹ năng áp dụng pháp luật, tư duy phản biện và được bồi dưỡng hình thành thái độ văn hóa ứng xử pháp lý và tuân thủ pháp luật."
          ]}
          training={
            home_content?.acf?.thoi_gian?.text_2 ||
            " Chỉ từ 2.2 - 3 năm (tùy đối tượng đầu vào)"
          }
          Form={
            home_content?.acf?.hinh_thuc?.text_2 ||
            "Tín chỉ (tạo điều kiện thuận lợi tối đa cho người học), học viên có thể lựa chọn thời gian học, giảng viên, tiến độ, chuyên ngành phù hợp với năng lực và nguyện vọng."
          }
          Degree={home_content?.acf?.bang_cap?.text_2 || "Cử nhân Luật"}
          Target={[
            home_content?.acf?.text_1 ||
              "Với mục tiêu trang bị cho người học kiến thức cơ bản và toàn diện về pháp luật, các vấn đề chính trị, kinh tế, văn hoá, xã hội có liên quan; nắm vững kiến thức lý luận và định hướng chuyên sâu kiến thức thực tiễn về pháp luật; phương pháp tư duy pháp lý, ý thức pháp luật, kĩ năng nghiên cứu và áp dụng pháp luật để giải quyết các vấn đề pháp lý phát sinh trong thực tiễn đời sống.",
            home_content?.acf?.text_2 ||
              "Chương trình đào tạo Ngành Luật, Trường Đại học Mở Hà Nội đã có những đổi mới cơ bản theo hướng tăng cường kiến thức thực tiễn và thời gian thực tập, thực hành nghề nghiệp tại các cơ quan bảo vệ pháp luật và các doanh nghiệp, tổ chức kinh tế, bảo đảm khi tốt nghiệp, sinh viên ngành Luật của Trường Đại học Mở Hà Nội có thể thực hiện các công việc liên quan đến lĩnh vực pháp luật."
          ]}
          location={[
            home_content?.acf?.text_3 ||
              "<b> Với nội dung và cách thức tổ chức đào tạo mới, sau khi tốt nghiệp, sinh viên ngành Luật Trường Đại học Mở Hà Nội có thể thực hiện các công việc sau đây: </b>",
            home_content?.acf?.text_4 ||
              "Tự thành lập các doanh nghiệp hoạt động trong lĩnh vực dịch vụ pháp lý hoặc sản xuất, kinh doanh trong các lĩnh vực của nền kinh tế.",
            home_content?.acf?.text_5 ||
              "Làm việc cho các văn phòng, công ty luật hoặc hành nghề luật sư độc lập, tư vấn pháp lý hoặc thực hiện các dịch vụ pháp lý khác",
            home_content?.acf?.text_6 ||
              "Làm luật sư nội bộ, nhân viên pháp chế trong các doanh nghiệp, tổ chức trong và ngoài nước.",
            home_content?.acf?.text_7 ||
              "Làm việc trong các cơ sở giáo dục, đào tạo, nghiên cứu khoa học pháp lý và đào tạo luật.",
            home_content?.acf?.text_8 ||
              " Làm việc trong hệ thống cơ quan các cấp thuộc ngành Tòa án nhân dân, Viện kiểm sát nhân dân, Thi hành án dân sự và Tổ chức trọng tài với vai trò là thư ký tòa án, thẩm tra viên, kiểm tra viên, thẩm phán, kiểm sát viên, chấp hành viên, trọng tài viên…",
            home_content?.acf?.text_9 ||
              "Làm việc trong hệ thống cơ quan nhà nước các cấp về Xây dựng pháp luật, Thi hành pháp luật, Thanh tra nhà nước, Thuế, Hải quan, Kiểm lâm, Công an, Biên phòng, Bộ phận pháp chế, Nhân sự, Trợ lý…"
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
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Luật do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_16 ||
              "Sinh viên ngành Luật của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
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
            "Chương trình học :  Sinh viên sẽ được học chuyên sâu về luật pháp, được đào tạo phán đoán sự việc, được học các phương pháp như phương pháp vận dụng, phương pháp xử lý một vấn đề, cách thức giúp người dân hay cơ quan đơn vị xử lý vấn đề pháp luật,...Các kiến thức đại cương được tích lũy đồng thời hoặc sau đó, nhằm mở mang nhận thức về bối cảnh để phát triển tư duy tầm rộng.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_3 ||
            "Kiến thức chuyên sâu : sinh viên ngành Luật sẽ được học rất nhiều luật như: luật lao động, luật hành chính, luật đất đai, luật dân sư, luật hình sự, luật thương mại, luật hành chính,...",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_4 ||
            "Chương trình được thiết kế phù hợp với phương pháp học trực tuyến. Người học có thể đăng ký theo tín chỉ, học chậm hay nhanh nhưng vẫn đảm bảo được khung chương trình bắt buộc theo quy định của Nhà trường."
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
