"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/blog", name: "Blog" },
];

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header className="flex justify-between items-center mb-10">
      <div>
        <Link href="/">
          <Image src={"file.svg"} width={30} height={30} alt="logo" />
        </Link>
      </div>
      <div className="flex gap-4 items-center text-2xl">
        {links.map((link) => {
          const isActive = link.path.startsWith(path);
          console.log(isActive);
          return (
            <Link
              href={link.path}
              key={link.path}
              className={`${isActive ? "font-bold text-blue-400" : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
