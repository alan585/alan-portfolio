import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJava,
  FaLinux,
  FaShopify,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaFileAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: "Here's a little about myself, and what I'm passionate about.",
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
  title: "My experience",
  description: "Here are a few of the places I've worked.",
  items: [
    {
      position: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "2022 - Present",
      description: "Working on a project",
    },
    {
      position: "Front-End Developer Intern",
      company: "Web Design Studio",
      duration: "Summer 2021",
      description: "Working on a project",
    },
    {
      position: "Freelance Web Developer",
      company: "E-commerce Startup",
      duration: "2020 - 2021",
      description: "Working on a project",
    },
    {
      position: "Teaching Assistant",
      company: "Tech Academy",
      duration: "2019 - 2020",
      description: "Working on a project",
    },
  ],
};

// education data
const education = {
  title: "My education",
  description: "Here is a little about my educational background.",
  items: [
    {
      duration: "2023",
      degree: "Full Stack Web Development Bootcamp",
      institution: "Online Course Platform",
      description: "Working on a project",
    },
    {
      duration: "2022",
      degree: "Front-end Track",
      institution: "Codecademy",
      description: "Working on a project",
    },
    {
      duration: "2020 - 2021",
      degree: "Programming Course",
      institution: "Online Course",
      description: "Working on a project",
    },
    {
      duration: "2019",
      degree: "Certified Web Developer",
      institution: "Tech Institute",
      description: "Working on a project",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "This is what I have been working with recently.",
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
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaLinux />,
      name: "linux",
    },
    {
      icon: <FaShopify />,
      name: "shopify",
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

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 321 654 876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
];

export {
  about,
  experience,
  education,
  skills,
  socialLinks,
  stats,
  services,
  projects,
  info,
};
