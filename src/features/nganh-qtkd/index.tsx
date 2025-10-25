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
export const Qtkd = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=quan-tri-kinh-doanh`, {
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
          "Chương trình Cử nhân trực tuyến ngành Quản trị kinh doanh"
        }
        backgroundImage={home_content?.acf?.background || "/Group-19.png "}
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "<b> Quản trị kinh doanh </b> là ngành học khai phá tiềm năng quản lý, điều hành hoạt động sản xuất, kinh doanh… cho những người học năng động, yêu ngành và muốn làm giàu chính đáng. Trong bối cảnh hội nhập quốc tế sâu rộng, việc đào tạo nhân lực ngành quản trị kinh doanh được chú trọng ở mọi quốc gia với nhiều cơ hội việc làm hấp dẫn. "
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
            home_content?.acf?.bang_cap?.text_2 || "Cử nhân Quản trị kinh doanh"
          }
          Target={[
            home_content?.acf?.text_1 ||
              "<b> Cử nhân Quản trị kinh doanh sẽ được trang bị các kiến thức cơ bản sau: </b> ",
            home_content?.acf?.text_2 ||
              "Kiến thức ngành bao gồm cơ sở lý luận và thực tiễn về khoa học kinh tế (kinh tế vi mô, kinh tế vĩ mô, kinh tế phát triển), khoa học quản trị, khoa học tài chính - tiền tệ…và những công cụ đo lường và phân tích kinh tế.",
            home_content?.acf?.text_3 ||
              "Hiểu và có khả năng áp dụng những kiến thức kỹ năng về quản trị doanh nghiệp và từng nghiệp vụ cụ thể trong quản trị doanh nghiệp, bao gồm từ việc hoạch định chiến lược bằng các công cụ tổ chức, kế hoạch, điều hành; các công cụ đo lường, phân tích, giám sát quá trình sản xuất – kinh doanh có hiệu quả.",
            home_content?.acf?.text_4 ||
              "Hiểu và nắm vững khối kiến thức bổ trợ nhằm thường xuyên bổ sung, cập nhật những kiến thức mới của khoa học quản trị doanh nghiệp và những ứng dụng mới của khoa học – công nghệ, đặc biệt là toán học, tin học vào công tác quản trị như điều khiển học kinh tế, thương mại điện tử, kỹ năng mềm…",
            home_content?.acf?.text_5 ||
              "<b> Cử nhân Quản trị kinh doanh sẽ có cơ hội gì khi ra trường? </b>",
            home_content?.acf?.text_6 ||
              "Là những người năng động, có khả năng làm việc độc lập, sáng tạo, đáp ứng nhu cầu thực tiễn với các kỹ năng nghề nghiệp, kỹ năng cứng và kỹ năng mềm để có thể thích ứng trong môi trường kinh doanh cạnh tranh, dưới điều kiện làm việc áp lực cao.",
            home_content?.acf?.text_7 ||
              "Có khả năng tìm kiếm, nắm bắt các cơ hội kinh doanh và khởi sự doanh nghiệp; tổ chức, lãnh đạo và điều hành hoạt động của doanh nghiệp với vai trò của một nhà quản trị.",
            home_content?.acf?.text_8 ||
              "Đủ trình độ tham gia các khóa học, bồi dưỡng nâng cao về kinh tế, quản trị kinh doanh, nghiệp vụ giám đốc, thương mại, đầu tư trong và ngoài nước.",
            home_content?.acf?.text_9 ||
              "Đủ trình độ học bằng đại học thứ  2 của các chuyên ngành liên quan và bậc sau đại học (thạc sỹ, tiến sĩ) chuyên ngành Quản trị kinh doanh trong và ngoài nước… "
          ]}
          location={[
            home_content?.acf?.text_10 ||
              "<b> Sinh viên tốt nghiệp ngành Quản trị kinh doanh có cơ hội làm việc tại nhiều vị trí, từ nhân viên/chuyên viên đến trưởng nhóm, trưởng phòng, giám đốc… ở nhiều bộ phận của các tổ chức như :  </b>",
            home_content?.acf?.text_11 || "<b> Kinh doanh - Sales : </b>",
            home_content?.acf?.text_12 ||
              "Nhân viên bán hàng/đại diện bán hàng (Salesman/ Sales Representatives): Là vị trí tiếp xúc trực tiếp với khách hàng nhiều nhất; chịu trách nhiệm tìm kiếm, kết nối, giao dịch và chăm sóc khách hàng, lên kế hoạch bán hàng, phát triển khách hàng,… ",
            home_content?.acf?.text_13 ||
              "<b> Giám sát bán hàng (Supervisor): </b> Là người quản lý một khu vực thị trường nhỏ với công việc chính là xây dựng kế hoạch bán hàng, xây dựng và quản lý đội ngũ nhân viên bán hàng.",
            home_content?.acf?.text_14 ||
              "<b> Phụ trách bán hàng khu vực (Area Sales Manager):</b> thường quản lý từ 3-5 Supervisor, chịu trách nhiệm lập kế hoạch và tổ chức triển khai thực hiện kế hoạch xúc tiến và bán hàng cho khu vực thị trường mình phụ trách; lên kế hoạch và tham gia tuyển dụng, đào tạo, huấn luyện nhân viên; theo dõi khách hàng hiện có, phát triển khách hàng mới; báo cáo và theo dõi doanh số bán sản phẩm định kỳ; phân tích số liệu bán hàng, chất lượng sản phẩm và so sánh với sản phẩm cạnh tranh nhằm đề xuất giải pháp phát triển thị trường; và những công việc khác.",
            home_content?.acf?.text_15 || "Xuất nhập khẩu (kinh doanh quốc tế)",
            home_content?.acf?.text_16 || " Nhân sự - Tổ chức hành chính",
            home_content?.acf?.text_17 || "Nhân viên tuyển dụng ",
            home_content?.acf?.text_18 || "Nhân viên lương thưởng và phúc lợi ",
            home_content?.acf?.text_19 || "Chuyên gia phân tích công việc ",
            home_content?.acf?.text_20 ||
              "Quản lý về đào tạo huấn luyện và phát triển: chỉ đạo và giám sát các chương trình đào tạo và phát triển cho nhân viên.",
            home_content?.acf?.text_21 || "Đào tạo huấn luyện nhân viên",
            home_content?.acf?.text_22 || "<b> Marketing : </b> ",
            home_content?.acf?.text_23 ||
              "<b> Chuyên viên marketing: </b> Thực hiện những nhiệm vụ do Brand manager và/hoặc Marketing manager giao, chẳng hạn như: nghiên cứu khách hàng, đối thủ, môi trường kinh doanh; thực hiện và đánh giá kế hoạch marketing;…",
            home_content?.acf?.text_24 ||
              "<b> Brand manager: </b> Độc lập quản lý một hay nhiều nhãn hàng. Brand manager chịu trách nhiệm nghiên cứu thị trường, phát triển sản phẩm, đảm bảo doanh số và lợi nhuận bán hàng và hoạt động khác liên quan đến nhãn hàng mình quản lý.",
            home_content?.acf?.text_25 ||
              "<b> Marketing manager: </b> Quản lý toàn bộ công việc marketing của doanh nghiệp nhỏ hoặc một ngành hàng của doanh nghiệp lớn. Marketing manager quản lý hoạt động của Brand manager và phân bổ ngân sách marketing phù hợp với chiến lược kinh doanh của công ty.",
            home_content?.acf?.text_26 || "<b> Tài chính : </b>",
            home_content?.acf?.text_27 || "Chuyên gia phân tích tài chính",
            home_content?.acf?.text_28 || "Môi giới chứng khoán",
            home_content?.acf?.text_29 || "Giao dịch viên chứng khoán",
            home_content?.acf?.text_30 || "Quản lý tài chính",
            home_content?.acf?.text_31 ||
              "Phân tích đánh giá bất động sản (CPV: Certified Public Valuer)",
            home_content?.acf?.text_32 || "Nghề kho vận và hậu cần",
            home_content?.acf?.text_33 ||
              "Logistics gồm rất nhiều dịch vụ như vận tải, kho bãi, xếp dỡ… với nhiều tiềm năng để phát triển. Sau khi tốt nghiệp, sinh viên có thể công tác tại các doanh nghiệp làm dịch vụ logistics, doanh nghiệp làm dịch vụ vận tải đa phương thức nói riêng và các doanh nghiệp dịch vụ vận tải, giao nhận nói chung, … ",
            home_content?.acf?.text_34 || "<b> Bao gồm: </b>",
            home_content?.acf?.text_35 || "Dịch vụ vận tải hàng hải",
            home_content?.acf?.text_36 || "Dịch vụ vận tải hàng không",
            home_content?.acf?.text_37 || "Dịch vụ vận tải thủy nội địa",
            home_content?.acf?.text_38 || "Dịch vụ vận tải đường bộ",
            home_content?.acf?.text_39 || "Dịch vụ vận tải đường sắt",
            home_content?.acf?.text_40 || " Dịch vụ vận tải đường ống.",
            home_content?.acf?.text_41 ||
              "Các dịch vụ logistics liên quan khác, bao gồm:",
            home_content?.acf?.text_42 ||
              "Dịch vụ kiểm tra và phân tích kỹ thuật",
            home_content?.acf?.text_43 || "Dịch vụ bưu chính",
            home_content?.acf?.text_44 || "Dịch vụ thương mại bán buôn",
            home_content?.acf?.text_45 ||
              "Dịch vụ thương mại bán lẻ, bao gồm cả hoạt động quản lý hàng lưu kho, thu gom, tập hợp, phân loại hàng hóa, phân phối lại và giao hàng",
            home_content?.acf?.text_46 || "Các dịch vụ hỗ trợ vận tải khác.",
            home_content?.acf?.text_47 || "Kế hoạch - đầu tư - sản xuất",
            home_content?.acf?.text_48 ||
              "Nhân viên xây dựng chiến lược và lập kế hoạch",
            home_content?.acf?.text_49 || "Quản lý chất lượng",
            home_content?.acf?.text_50 ||
              "Cán bộ giảng dạy và nghiên cứu về QTKD tại các trường đại học, cao đẳng, trung cấp hoặc  các Viện, cơ quan nghiên cứu của các Bộ, Ngành."
          ]}
          jobs={[
            home_content?.acf?.text_51 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo",
            home_content?.acf?.text_52 || "Tốt nghiệp Trung cấp",
            home_content?.acf?.text_53 || "Tốt nghiệp Cao Đẳng",
            home_content?.acf?.text_54 || "Tốt nghiệp Đại học",
            home_content?.acf?.text_55 ||
              "Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_56 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Quản trị kinh doanh do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_57 ||
              "Sinh viên ngành Quản trị kinh doanh của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "<b>Chương trình đào tạo Cử nhân trực tuyến Quản trị kinh doanh</b> có nội dung bao hàm đầy đủ kiến thức tương đương với chương trình đại học chính quy, nhưng được thiết kế theo hướng tiếp cận nghề nghiệp.  Các kiến thức đại cương được tích lũy trong hoặc sau đó, nhằm mở mang nhận thức về bối cảnh để phát triển tư duy tầm rộng.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Chương trình được thiết kế phù hợp với phương pháp học trực tuyến. Người học có thể đăng ký theo tín chỉ, học chậm hơn hay nhanh hơn nhưng phải đảm bảo phần khung bắt buộc theo quy định của Nhà trường."
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/qtkdd.png"
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
          "/qtkdd.png"
        }
      />
    </>
  );
};
