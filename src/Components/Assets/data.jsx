import lady from "../Assets/laddy1.jpg";
import lady2 from "../Assets/ladyy.jpg";
import { FaCentos } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";
import m2 from "../Assets/m2.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import dv1 from "../Assets/dv1.jpg";
import dv2 from "../Assets/dv2.jpg";
import dv3 from "../Assets/dv3.jpg";
import dv4 from "../Assets/dv4.jpg";

export const navlinks = [
  { id: 1, title: "Trang chủ", link: "#home" },
  { id: 1, title: "Giới thiệu", link: "#about" },
  { id: 1, title: "Dịch vụ", link: "#service" },
  { id: 1, title: "Đánh giá", link: "#feedback" },
];

export const about = [
  {
    number: "01.",
    head: "UY TÍN",
    text: "Cam kết chất lượng dịch vụ với khách hàng",
  },
  {
    number: "02.",
    head: "TẬN TÂM",
    text: "Phục vụ khách hàng với tinh thần trách nhiệm cao",
  },
  {
    number: "03.",
    head: "CHUYÊN NGHIỆP",
    text: "Đội ngũ kỹ thuật viên giàu kinh nghiệm",
  },
  {
    number: "04.",
    head: "HỖ TRỢ 24/7",
    text: "Sẵn sàng phục vụ khách hàng mọi lúc",
  },
];

export const services = [
  {
    icon: <FaCentos />,
    head: "Lắp đặt và bảo trì máy lạnh",
    desc: "Dịch vụ lắp đặt và bảo trì máy lạnh chuyên nghiệp, đảm bảo hệ thống hoạt động ổn định và tiết kiệm điện năng",
    action: "Chi tiết",
    link: <GrLinkNext />,
    image: dv3,
  },
  {
    icon: <FaCentos />,
    head: "Lắp đặt và bảo trì hệ thống điện",
    desc: "Thiết kế và lắp đặt hệ thống điện dân dụng, công nghiệp với đội ngũ kỹ thuật viên chuyên môn cao",
    action: "Chi tiết",
    link: <GrLinkNext />,
    image: dv1,
  },
  {
    icon: <FaCentos />,
    head: "Hệ thống xây dựng",
    desc: "Cung cấp giải pháp xây dựng toàn diện, đảm bảo chất lượng và tiến độ thi công",
    action: "Chi tiết",
    link: <GrLinkNext />,
    image: dv2,
  },
  {
    icon: <FaCentos />,
    head: "Lắp đặt thang máy gia đình",
    desc: "Tư vấn và lắp đặt thang máy gia đình với công nghệ hiện đại, an toàn và tiết kiệm",
    action: "Chi tiết",
    link: <GrLinkNext />,
    image: dv4,
  },
];

export const more = [
  {
    head: "Cam kết chất lượng dịch vụ",
    desc: "Với phương châm 'Uy tín - Tận tâm - Trách nhiệm', chúng tôi cam kết mang đến cho khách hàng những dịch vụ chất lượng nhất, đảm bảo sự hài lòng tuyệt đối.",
  },
];

export const feedback = [
  {
    image: lady,
    icon: <RiDoubleQuotesL />,
    name: "Văn Thị Diễm",
    company: "Khách hàng",
    comment:
      "Cần tìm đơn vị sửa chữa uy tín thì nên chọn bên này. Đội ngũ kỹ thuật viên chuyên nghiệp, tận tâm với khách hàng.",
  },
  {
    image: lady2,
    icon: <RiDoubleQuotesL />,
    name: "Đặng Đan",
    company: "Khách hàng",
    comment:
      "Dịch vụ nhanh chóng, giá cả hợp lý. Đội ngũ kỹ thuật viên nhiệt tình và chuyên nghiệp.",
  },
];

export const menuItems = [
  {
    title: "Làm thế nào để đặt lịch dịch vụ?",
    content:
      "Bạn có thể liên hệ qua số hotline 096 881 43 50 hoặc inbox fanpage để được tư vấn và đặt lịch.",
  },
  {
    title: "Thời gian làm việc của công ty?",
    content: "Chúng tôi phục vụ 24/7, sẵn sàng hỗ trợ khách hàng mọi lúc.",
  },
  {
    title: "Có bảo hành dịch vụ không?",
    content: "Tất cả các dịch vụ đều được bảo hành theo quy định của công ty.",
  },
  {
    title: "Khu vực phục vụ?",
    content: "Chúng tôi phục vụ tại TP.HCM và các tỉnh lân cận.",
  },
  {
    title: "Có nhận sửa chữa khẩn cấp không?",
    content: "Có, chúng tôi có dịch vụ sửa chữa khẩn cấp 24/7.",
  },
  {
    title: "Có tư vấn miễn phí không?",
    content:
      "Có, chúng tôi tư vấn miễn phí cho khách hàng trước khi thực hiện dịch vụ.",
  },
];

export const pricing = [
  {
    plan: "Gói Cơ Bản",
    price: "Liên hệ",
    features: [
      "Sửa chữa điện dân dụng cơ bản",
      "Lắp đặt quạt trần, đèn chiếu sáng",
      "Kiểm tra an toàn hệ thống điện",
    ],
  },
  {
    plan: "Gói Nâng Cao",
    price: "Liên hệ",
    features: [
      "Sửa chữa, bảo trì máy lạnh",
      "Lắp đặt hệ thống điện âm tường",
      "Tư vấn giải pháp tiết kiệm điện",
    ],
  },
  {
    plan: "Gói Toàn Diện",
    price: "Liên hệ",
    features: [
      "Thi công hệ thống điện, nước cho công trình",
      "Lắp đặt và bảo trì thang máy gia đình",
      "Giải pháp nhà thông minh",
    ],
  },
];
