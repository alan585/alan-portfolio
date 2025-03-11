import { FaGithub, FaLinkedinIn, FaFileAlt } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Alan Alvarado",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 year",
    },
    {
      fieldName: "Email",
      fieldValue: "email@email.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

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

export { about, experience, education, skills, socialLinks, stats, services };
