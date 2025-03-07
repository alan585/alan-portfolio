import { FaGithub, FaLinkedinIn, FaFileAlt } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    title: "Github",
    url: "https://github.com/alan585",
    icon: <FaGithub />,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alan-alvarado-camacho-786123175/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    title: "Resume",
    url: "/resume.pdf",
    icon: <FaFileAlt />,
  },
];

const stats = [
  {
    num: 1,
    text: "Year of experience",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 300,
    text: "Code commits",
  },
];

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build responsive, high-performing websites tailored to your needs, using the latest technologies for a seamless user experience.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I create intuitive, visually appealing interfaces that enhance user engagement and improve overall usability.",
    href: "",
  },
  {
    num: "03",
    title: "Database Management",
    description:
      "I design and optimize databases for efficiency, security, and scalability to ensure smooth data handling.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I implement strategies to boost your website’s search engine ranking, increasing visibility and organic traffic.",
    href: "",
  },
];

export { socialLinks, stats, services };
