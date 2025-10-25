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
export const Tmdt = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=thuong-mai-dien-tu`, {
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
          "Chương Trình Cử Nhân Trực Tuyến Ngành Thương mại điện tử"
        }
        backgroundImage={home_content?.acf?.background || "/bannerehou.jpg "}
      >
        <Branch
          banner={home_content?.acf}
          overview={[
            home_content?.acf?.noi_dung_gioi_thieu ||
              "<b> Ngành Thương mại điện tử (TMĐT) </b> cung cấp cho sinh viên kiến thức, kỹ năng, năng lực tự chủ và trách nhiệm cần thiết để hình thành ý tưởng, thiết kế, triển khai và vận hành quá trình kinh doanh thông qua các phương tiện điện tử"
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
            home_content?.acf?.bang_cap?.text_2 || "Cử nhân Thương mại điện tử"
          }
          Target={[
            home_content?.acf?.text_1 ||
              "<b> Triển vọng nghề nghiệp ngành TMĐT? </b> ",
            home_content?.acf?.text_2 ||
              "Thương mại điện tử (TMĐT) là xu hướng của thời đại toàn cầu hóa, đây là lĩnh vực tiềm năng để các doanh nghiệp vừa và nhỏ sinh lợi và phát triển, cơ hội cho những ai muốn khởi nghiệp kinh doanh theo mô hình mới. Doanh số từ TMĐT đang chứng minh đây là lĩnh vực kinh doanh có triển vọng tăng trưởng toàn cầu dài hạn và được dự đoán sẽ phát triển mạnh mẽ thay thế dần các mô hình kinh doanh truyền thống.",
            home_content?.acf?.text_3 ||
              "Thị trường Thương mại điện tử tại Việt Nam đang phát triển mạnh mẽ trong những năm tới đây. Đó chính là lý do vì sao ngày càng nhiều công ty và doanh nghiệp phải bắt kịp xu thế phát triển này và nhu cầu nhân lực ở lĩnh vực TMĐT trong các công ty và doanh nghiệp ngày càng tăng. ",
            home_content?.acf?.text_4 ||
              "<b> Ngành thương mại điện tử đào tạo những gì? </b>",
            home_content?.acf?.text_5 ||
              "<b>Ngành học thương mại điện tử là sự giao thoa giữa ngành kinh doanh và công nghệ thông tin. Chương trình đào tạo sẽ cung cấp cho sinh viên những kiến thức, kỹ năng, năng lực cần thiết để thiết kế và triển khai, quy trình vận hành quá trình kinh doanh thông qua các phương tiện điện tử. Sinh viên Thương mại điện tử được trang bị nhóm kiến thức sau : </b>",
            home_content?.acf?.text_6 ||
              "Phát triển tư duy sáng tạo, định hướng kinh doanh, lên ý tưởng khởi nghiệp",
            home_content?.acf?.text_7 ||
              "Khả năng tự phát triển ý tưởng kinh doanh TMĐT trên nền tảng  website, thiết bị di động (IOS, Android) hay các ứng dụng TMĐT khác.",
            home_content?.acf?.text_8 ||
              "Tiếp thị trực tuyến, tiếp thị nội dung trên nền tảng Facebook, Google, Youtube.",
            home_content?.acf?.text_9 ||
              "Quản trị đơn hàng (logistics), bán hàng, quản trị doanh nghiệp, nguồn nhân lực,…",
            home_content?.acf?.text_10 ||
              "Phát triển hệ thống và chăm sóc khách hàng, nhà cung cấp."
          ]}
          location={[
            home_content?.acf?.text_11 ||
              "<b> Các vị trí cơ hội việc làm khi sinh viên tốt nghiệp ngành Thương mại điện tử </b>",
            home_content?.acf?.text_12 ||
              " <b> Quản lý / chuyên viên marketing - kinh doanh trực tuyến: </b> ứng dụng Thương mại điện tử vào công việc marketing, kinh doanh trực tuyến, tăng khả năng kinh doanh.",
            home_content?.acf?.text_13 ||
              " <b> Quản lý / chuyên viên tư vấn: </b> Hoạch định chính sách phát triển hệ thống TMĐT, xây dựng và bảo trì các dự án Thương mại điện tử, chiến lược Quản trị doanh nghiệp thương mại điện tử.",
            home_content?.acf?.text_14 ||
              "<b> Quản lý / chuyên viên Thương mại điện tử:</b> xây dựng các hệ thống giao dịch TMĐT, kinh doanh trực tuyến tại các cơ quan và doanh nghiệp (hành chính sự nghiệp, ngân hàng, viễn thông, hàng không, xây dựng…) hoặc tại các Bộ, Ngành từ Trung ương tới địa phương.",
            home_content?.acf?.text_15 ||
              "Cán bộ giảng dạy, nghiên cứu và ứng dụng Thương mại điện tử tại các trường đại học, cao đẳng, trung cấp hoặc  các Viện, cơ quan nghiên cứu của các Bộ, Ngành.",
            home_content?.acf?.text_16 ||
              "<b> Doanh nhân khởi nghiệp: </b> xây dựng kế hoạch kinh doanh để biến ý tưởng kinh doanh thành hiện thực.."
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
              "Sinh viên tốt nghiệp nhận Bằng Cử nhân Thương mại điện tử do Trường Đại học Mở Hà Nội cấp, không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận giá trị.",
            home_content?.acf?.text_23 ||
              "Sinh viên ngành Thương mại điện tử của Trường Đại học Mở Hà Nội sau khi tốt nghiệp có đủ năng lực học tập nâng cao trình độ chuyên môn nghề nghiệp trong các khóa học, bồi dưỡng nâng cao trong và ngoài nước; học bằng đại học thứ 2 của các chuyên ngành theo nhu cầu cá nhân; học bậc sau đại học (Thạc sỹ, Tiến sỹ) các chuyên ngành có liên quan trong và ngoài nước."
          ]}
        />
      </LayoutNganh>
      <ProgramValues />
      <BranchNganh
        chuong_trinh_hoc={home_content?.acf?.chuong_trinh_hoc}
        programlearns={[
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_1 ||
            "<b>Thương mại điện tử</b> là một ngành học thuộc khối kinh tế, là ngành học liên quan đến các hoạt động trong việc ứng dụng các công nghệ, truyền thông trên những ứng dụng trong quá trình kinh doanh trực tuyến.",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_2 ||
            "Khi theo học <b>thương mại điện tử</b>, các bạn sinh viên sẽ được trang bị các kiến thức như: tổng quan về thương mại điện tử, quản trị dự án đầu tư, Digital Marketing, quản trị quan hệ khách hàng,...",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_3 ||
            "Bên cạnh đó là những kiến thức liên quan đến tổ chức và điều hành doanh nghiệp kinh doanh trực tuyến như: Marketing điện tử, thực hiện các hoạt động quảng cáo online,thực hiện các hoạt động bán hàng trên các sản thương mại điện tử quốc tế như: Amazon, Alibaba,...",
          home_content?.acf?.chuong_trinh_hoc?.noi_dung?.text_4 ||
            "Sau khi tốt nghiệp <b>ngành thương mại điện tử</b>, các bạn sinh viên sẽ phát triển được sự sáng tạo, có định hướng kinh doanh trực tuyến, lên ý tưởng khởi nghiệp, có các kỹ năng liên quan đến quản trị đơn hàng và tiếp thị sản phẩm trên các nền tảng ứng dụng trực tuyến như: facebook, instagram, tiktok, youtube,..."
        ]}
      />
      <Notifiy
        src={
          home_content?.acf?.thong_bao_tuyen_sinh?.noi_dung?.anh_anh ||
          "/tmdtt.png"
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
          "/tmdtt.png"
        }
      />
    </>
  );
};
