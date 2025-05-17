import lady from "../Assets/laddy1.jpg";
import lady2 from "../Assets/ladyy.jpg";
import { FaCentos } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";
import m2 from "../Assets/m2.jpg";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";

export const navlinks = [
  { id: 1, title: "Home", link: "#home" },
  { id: 1, title: "About", link: "#about" },
  { id: 1, title: "Service", link: "#service" },
  { id: 1, title: "Testimonials", link: "#feedback" },
];
export const about = [
  {
    number: "01.",
    head: "Digital Marketing",
    text: "Drive traffics, leads and conversion with our tailored strategies",
  },
  {
    number: "02.",
    head: "Email Marketing",
    text: "Nurture leads and foster customers relationships through personalized campaigns",
  },
  {
    number: "03.",
    head: "SEO Optimization",
    text: "Increase your search visibility and rank heigher on search engines",
  },
  {
    number: "04.",
    head: "Social Media Management",
    text: "Build a strong online presence and engage your audience",
  },
];

export const services = [
  {
    icon: <FaCentos />,
    head: "Service 1",
    desc: "A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides",
    action: "Explore",
    link: <GrLinkNext />,
    image: img1,
  },
  {
    icon: <FaCentos />,
    head: "Service 2",
    desc: "A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides",
    action: "Explore",
    link: <GrLinkNext />,
    image: img2,
  },
  {
    icon: <FaCentos />,
    head: "Service 3",
    desc: "A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides",
    action: "Explore",
    link: <GrLinkNext />,
    image: img3,
  },
  {
    icon: <FaCentos />,
    head: "Service 4",
    desc: "A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides",
    action: "Explore",
    link: <GrLinkNext />,
    image: m2,
  },
  {
    icon: <FaCentos />,
    head: "Service 5",
    desc: "A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides",
    action: "Explore",
    link: <GrLinkNext />,
    image: lady,
  },
  {
    icon: <FaCentos />,
    head: "Service 6",
    desc: "A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides",
    action: "Explore",
    link: <GrLinkNext />,
    image: lady2,
  },
];

export const more = [
  {
    head: "Business Has Only Two Function - Marketing And Innovation",
    desc: "Type a very reassuring and encouraging text to keep clients elated and expect the best from you Type a very reassuring and encouraging text to keep clients elated and expect the best from you Type a very reassuring and encouraging text to keep clients elated and expect the best from you",
  },
];

export const feedback = [
  {
    image: lady,
    icon: <RiDoubleQuotesL />,
    name: "Dianne Russell",
    company: "Company",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
  {
    image: lady2,
    icon: <RiDoubleQuotesL />,
    name: "Dianne Russell",
    company: "Company",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
  {
    image: lady,
    icon: <RiDoubleQuotesL />,
    name: "Dianne Russell",
    company: "Company",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
];

export const menuItems = [
  {
    title: "How do i get mobile app",
    content: "Content for Section 1",
  },
  {
    title: "How do i contact support",
    content: "Content for Section 2",
  },
  {
    title: "Ho do i track my growth",
    content: "Content for Section 2",
  },
  {
    title: "Does Infigio have paid services",
    content: "Content for Section 2",
  },
  {
    title: "How fast do i see result after using Infigio",
    content: "Content for Section 2",
  },
  {
    title: "Can i use Infigio for free",
    content: "Content for Section 3",
  },
];
