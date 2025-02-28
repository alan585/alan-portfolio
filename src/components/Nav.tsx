"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedinIn, FaFileAlt } from "react-icons/fa";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Work", url: "/work" },
  { id: 5, title: "Contact", url: "/contact" },
];

const socialLinks = [
  {
    id: 1,
    title: "Github",
    url: "https://github.com/Alan-Port",
    icon: <FaGithub />,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alan-port/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    title: "Resume",
    url: "/resume.pdf",
    icon: <FaFileAlt />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={`${pathname === link.url && "border-b-2 border-accent text-accent"} font-medium transition-all hover:text-accent`}
        >
          {link.title}
        </Link>
      ))}
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-accent text-accent duration-500 hover:bg-accent hover:text-primary hover:transition-all"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
