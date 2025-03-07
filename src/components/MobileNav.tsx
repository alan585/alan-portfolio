"use client";

import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Services", url: "/services" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Work", url: "/work" },
  { id: 5, title: "Contact", url: "/contact" },
];

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetHeader>
          <SheetTitle>Mobile Navbar</SheetTitle>
          <SheetDescription>
            Navbar for mobile and smaller displays
          </SheetDescription>
        </SheetHeader>
      </VisuallyHidden>
      <SheetTrigger asChild className="flex flex-col justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-40 mt-32 flex justify-center">
          <Link href={"/"} className="">
            <h1 className="text-4xl font-bold">
              Alan<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="mb-24 flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${link.url === pathName && "border-b-2 border-accent text-accent"} text-xl transition-all hover:text-accent`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              key={link.id}
              href={link.url}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-accent text-accent duration-500 hover:bg-accent hover:text-primary hover:transition-all"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
