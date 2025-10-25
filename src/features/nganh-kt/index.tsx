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
export const Kt = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=ke-toan`, {
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
          "Chương trình Cử nhân trực tuyến ngành Kế toán"
        }
        backgroundImage={home_content?.acf?.background || "/Group-17.png "}
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "<b> Ngành Kế toán </b> cung cấp cho sinh viên kiến thức, kỹ năng, năng lực tự chủ và trách nhiệm cần thiết để vận dụng thành thạo các nguyên tắc kế toán cơ bản, luật, chuẩn mực kế toán Việt Nam và quốc tế, chế độ kế toán Việt Nam vào thực tiễn công tác kế toán."
          ]}
          training={
            home_content?.acf?.thoi_gian?.text_2 ||
            "Chỉ từ 2.2 - 3 năm (tùy đối tượng đầu vào)"
          }
          Form={
            home_content?.acf?.hinh_thuc?.text_2 ||
            "Tín chỉ (tạo điều kiện thuận lợi tối đa cho người học), học viên có thể lựa chọn thời gian học, giảng viên, tiến độ, chuyên ngành phù hợp với năng lực và nguyện vọng."
          }
          Degree={home_content?.acf?.bang_cap?.text_2 || " Cử nhân Kế toán"}
          Target={[
            home_content?.acf?.text_1 || " <b> Triển vọng nghề nghiệp? </b>",
            home_content?.acf?.text_2 ||
              "Kế toán là bộ phận không thể thiếu ở tất cả các đơn vị tổ chức. Vì vậy thị trường việc làm của nghề Kế toán rất lớn và rộng mở với sinh viên tốt nghiệp ngành này. Hãy làm một phép tính nhỏ: Mỗi năm, nước ta sẽ có khoảng 40.000 doanh nghiệp mới được thành lập, mỗi doanh nghiệp cần từ 1-3 kế toán viên thậm chí là nhiều hơn… ",
            home_content?.acf?.text_3 ||
              "Ngoài các doanh nghiệp trong nước, sinh viên ngành kế toán sau khi ra trường còn có thể làm việc tại các doanh nghiệp nước ngoài hoặc đơn vị công - các đơn vị hoạt động không vì lợi nhuận như: các cơ quan hành chính sự nghiệp, trường học, bệnh viện… Vậy nên, chắc chắn cơ hội việc làm ở ngành này là không hề nhỏ, miễn sao sinh viên phải thực sự có năng lực, có kiến thức và kỹ năng nghề nghiệp đáp ứng nhu cầu thực tiễn."
          ]}
          location={[
            home_content?.acf?.text_4 ||
              "<b> Các vị trí cơ hội việc làm khi sinh viên tốt nghiệp ngành Kế toán </b>",
            home_content?.acf?.text_5 ||
              "<b> Với các kiến thức về chuyên môn, cùng các kỹ năng được đào tạo tại Khoa Kinh tế Trường Đại học Mở Hà Nội, bạn có thể đảm nhiệm nhiều vị trí công việc khác nhau như : </b>",
            home_content?.acf?.text_6 || "<b> Kế toán trưởng : </b>",
            home_content?.acf?.text_7 ||
              "Là người chịu trách nhiệm trước lãnh đạo doanh nghiệp về tất cả hoạt động của phòng do mình phụ trách, nắm được toàn bộ tình hình tài chính của doanh nghiệp để tham mưu cho giám đốc ra các quyết định về chính sách và kế hoạch tài chính của doanh nghiệp.",
            home_content?.acf?.text_8 ||
              "Có trách nhiệm quản lý chung, trông coi (kiểm soát) mọi hoạt động có liên quan đến lĩnh vực tài chính, kế toán. ",
            home_content?.acf?.text_9 ||
              "Là người trực tiếp tổ chức và giám sát quá trình lập ngân quỹ vốn. ",
            home_content?.acf?.text_10 ||
              "Là người trực tiếp giám sát, theo dõi các nguồn vốn được tài trợ, quản trị khoản mục tiền mặt của doanh nghiệp, quan hệ với các ngân hàng, các tổ chức tín dụng và các định chế tài chính khác.",
            home_content?.acf?.text_11 || "<b> Kế toán tổng hợp : </b>",
            home_content?.acf?.text_12 ||
              "Tập hợp các số liệu từ kế toán chi tiết tiến hành hạch toán tổng hợp, lập các biểu báo cáo kế toán, thống kê, tổng hợp theo quy định của nhà nước và doanh nghiệp.",
            home_content?.acf?.text_13 ||
              " Kiểm tra, tổng hợp báo cáo của các chi nhánh, đơn vị thành viên, đảm bảo tính chính xác, kịp thời phục vụ cho công tác phân tích tình hình hoạt động kinh doanh toàn doanh nghiệp.",
            home_content?.acf?.text_14 ||
              "Kiểm tra, kiểm soát, giám sát, tự kiểm tra nội bộ, hậu kiểm tình hình hoạt động tài chính của chi nhánh, kiểm tra việc chấp hành các quy định ghi chép sổ sách, chứng từ quản lý tiền hàng.",
            home_content?.acf?.text_15 ||
              " Kiểm tra nội dung, số liệu, định khoản các nghiệp vụ kinh tế phát sinh hằng ngày của các kế toán phần hành thực hiện trên máy, để phát hiện và hiệu chỉnh kịp thời các sai sót ( nếu có) về nghiệp vụ hạch toán, đảm bảo số liệu chính xác, kịp thời.",
            home_content?.acf?.text_16 ||
              "Lập, in các báo cáo tổng hợp, báo cáo chi tiết các tài khoản, bảng cân đối tài khoản, báo cáo cân đối tiền hàng theo đúng quy định.",
            home_content?.acf?.text_17 ||
              "Phối hợp kiểm tra các khoản chi phí sử dụng theo kế hoạch được duyệt, tổng hợp phân tích chỉ tiêu sử dụng chi phí, doanh thu của doanh nghiệp bảo đảm tính hiệu quả trong việc sử dụng vốn.",
            home_content?.acf?.text_18 ||
              " Hướng dẫn nghiệp vụ cho các phần hành kế toán của doanh nghiệp và các chi nhánh trong công tác xử lý số liệu, hạch toán các nghiệp vụ kinh tế phát sinh để thực hiện tốt phần hành kế toán được phân công. Kiểm tra, hiệu chỉnh nghiệp vụ cho các kế toán viên nắm rõ cách thức hạch toán đối với các phát sinh mới về nghiệp vụ hạch toán kế toán.",
            home_content?.acf?.text_19 ||
              "Thực hiện công tác lưu trữ số liệu, sổ sách, báo cáo liên quan đến phần hành phụ trách đảm bảo an toàn, bảo mật.",
            home_content?.acf?.text_20 || "<b> Kế toán thanh toán : </b>",
            home_content?.acf?.text_21 ||
              "Lập chứng từ thu- chi cho các khoản thanh toán của doanh nghiệp đối với khách hàng và các khoản thanh toán nội bộ. Phản ánh vào các sổ sách liên quan đến phần hành kế toán hàng ngày và đối chiếu với sổ quỹ.",
            home_content?.acf?.text_22 ||
              "Kiểm tra tồn quỹ tiền mặt, tiền gửi ngân hàng của doanh nghiệp hàng ngày và cuối tháng.Theo dõi các khoản tạm ứng.",
            home_content?.acf?.text_23 ||
              "Tiếp nhận các chứng từ thanh toán và kiểm tra tính hợp lý, hợp lệ của chứng từ.",
            home_content?.acf?.text_24 ||
              "Cập nhật các quy định nội bộ về tiền đang chuyển, tiền gửi ngân hàng.",
            home_content?.acf?.text_25 ||
              "Kiểm tra, tổng hợp quyết toán toàn doanh nghiệp về tiền mặt, tiền gửi ngân hàng, tiền đang chuyển, các khoản tạm ứng, lương, BHXH, BHYT, chênh lệch tỷ giá.",
            home_content?.acf?.text_26 ||
              "Thực hiện lưu trữ chứng từ, sổ sách, các công văn, quy định có liên quan vào hồ sơ nghiệp vụ.",
            home_content?.acf?.text_27 || "<b> Kế toán công nợ : </b>",
            home_content?.acf?.text_28 ||
              "Có nhiệm vụ theo dõi các khoản công nợ phải thu, phải trả của khách hàng. Lập danh sách khoản nợ của các doanh nghiệp, đơn vị khách hàng để sắp xếp lịch thu, chi trả đúng hạn, đúng hợp đồng, đúng thời hạn, đôn đốc, theo dõi và đòi các khoản nợ chưa thanh toán.",
            home_content?.acf?.text_29 ||
              "Phân tích tình hình công nợ, đánh giá tỷ lệ thực hiện công nợ, tính tuổi nợ.",
            home_content?.acf?.text_30 ||
              "Kiểm tra công nợ phải thu, phải trả của doanh nghiệp.",
            home_content?.acf?.text_31 ||
              "Thực hiện lưu trữ các chứng từ, sổ sách, các công văn quy định có liên quan vào hồ sơ nghiệp vụ.",
            home_content?.acf?.text_32 ||
              "Kế toán Tài sản cố định – Công cụ, dụng cụ",
            home_content?.acf?.text_33 ||
              "Nhận xét sơ bộ về các chứng từ mua sắm tài sản cố định (TSCĐ), công cụ, dụng cụ.",
            home_content?.acf?.text_34 ||
              "Tiếp nhận, kiểm tra, tổng hợp các báo cáo kiểm kê định kỳ TSCĐ, công cụ, dụng cụ và các báo cáo các biến động TSCĐ hàng tháng.",
            home_content?.acf?.text_35 ||
              "Tính, trích khấu hao TSCĐ và phân bổ giá trị công cụ, dụng cụ định kỳ hàng tháng.",
            home_content?.acf?.text_36 ||
              " Quản lý về mặt giá trị, theo dõi biến động tăng, giảm, hạch toán khấu hao, phân bổ giá trị công cụ, dụng cụ tại các bộ phận, phòng ban trực thuộc doanh nghiệp và chi nhánh",
            home_content?.acf?.text_37 ||
              "<b> Kế toán vật tư - sản phẩm - hàng hoá - tiêu thụ : </b>",
            home_content?.acf?.text_38 ||
              "Theo dõi tình hình nhập –xuất – tồn kho vật tư, sản phẩm, hàng hoá về mặt số lượng và giá trị tại các kho của doanh nghiệp.",
            home_content?.acf?.text_39 ||
              "Định kỳ đối chiếu số lượng với thủ kho và lập bảng tổng hợp nhập- xuất – tồn kho sản phẩm, vật tư, hàng hoá vào cuối tháng.",
            home_content?.acf?.text_40 ||
              "Theo dõi tình hình tăng, giảm, tồn kho các loại vật tư.",
            home_content?.acf?.text_41 ||
              "<b> Kế toán doanh thu – tiêu thụ :<b> <b>  ",
            home_content?.acf?.text_42 ||
              " Theo dõi số lượng hàng hoá, sản phẩm, lao vụ, dịch vụ đã được xác định tiêu thụ.",
            home_content?.acf?.text_43 ||
              "Doanh thu phải được theo dõi chi tiết cho từng loại hình kinh doanh kể cả doanh thu bán hàng nội bộ. Trong từng loại doanh thu phải chi tiết cho từng loại sản phẩm, lao vụ, dịch vụ nhằm phục vụ cho việc xác định đầy đủ, chính xác kết quả kinh doanh theo yêu cầu quản lý tài chính và lập báo cáo kết quả hoạt động kinh doanh của doanh nghiệp.",
            home_content?.acf?.text_44 || "<b> Thủ quỹ :<b> ",
            home_content?.acf?.text_45 ||
              "Hàng ngày, căn cứ vào phiếu thu, phiếu chi, thủ quỹ tiến hành thực thu, thực chi và cập nhật vào sổ quỹ tiền mặt số tiền thu , chi trong ngày.",
            home_content?.acf?.text_46 ||
              "Cuối ngày chuyển sổ quỹ qua kế toán thanh toán để đối chiếu và lập báo cáo tồn quỹ tiền mặt.",
            home_content?.acf?.text_47 ||
              "Cán bộ giảng dạy và nghiên cứu về Kế toán tại các trường đại học, cao đẳng, trung cấp hoặc  các Viện, cơ quan nghiên cứu của các Bộ, Ngành.",
            home_content?.acf?.text_48 || "Ngành kế toán đào tạo những gì?",
            home_content?.acf?.text_49 ||
              "Chương trình đào tạo ngành Kế toán sẽ cung cấp cho sinh viên những kiến thức, kỹ năng, năng lực cần thiết để vận dụng thành thạo các nguyên tắc kế toán cơ bản, luật, chuẩn mực kế toán Việt Nam và quốc tế, chế độ kế toán Việt Nam vào thực tiễn công tác kế toán."
          ]}
          jobs={[
            home_content?.acf?.text_50 ||
              "Tốt nghiệp phổ thông hoặc tương đương theo quy định của Bộ Giáo dục và Đào tạo",
            home_content?.acf?.text_51 || "Tốt nghiệp Trung cấp",
            home_content?.acf?.text_52 || "Tốt nghiệp Cao Đẳng",
            home_content?.acf?.text_53 || "Tốt nghiệp Đại học",
            home_content?.acf?.text_54 ||
              "Sinh viên đang theo học tại các trường ĐH, CĐ"
          ]}
          value={[
            home_content?.acf?.text_55 ||
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Kế toán do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_56 ||
              "Sinh viên ngành Kế toán của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
        />
      </LayoutNganh>
      <ProgramValues />

      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "<b>Chương trình đào tạo Cử nhân trực tuyến Kế toán </b> có nội dung bao hàm đầy đủ kiến thức tương đương với chương trình đại học chính quy kế toán, nhưng được thiết kế theo hướng tiếp cận nghề nghiệp.  Các kiến thức đại cương được tích lũy đồng thời hoặc sau đó, nhằm mở mang nhận thức về bối cảnh để phát triển tư duy tầm rộng.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Chương trình được thiết kế phù hợp với phương pháp học trực tuyến. Người học có thể đăng ký theo tín chỉ, học chậm hơn hay nhanh hơn nhưng phải đảm bảo phần khung bắt buộc theo quy định của Nhà trường."
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/ktt.png"
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
          "/ktt.png"
        }
      />
    </>
  );
};
