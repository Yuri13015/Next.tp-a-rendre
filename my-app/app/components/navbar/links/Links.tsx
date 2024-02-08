"use client";

import { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLinkItem {
  title: string;
  path: string;
}

interface LinksProps {
  session?: {
    user?: {
      isAdmin?: boolean;
    };
  };
}

const NavLink: FC<{ item: NavLinkItem }> = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`min-w-[120px] p-2.5 rounded-lg font-medium text-center ${
        pathName === item.path ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
      } transition-colors duration-300 ease-in-out`}
    >
      {item.title}
    </Link>
  );
};

const links: NavLinkItem[] = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links: FC<LinksProps> = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="hidden md:flex items-center gap-4">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            {}
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </nav>
      <div className="md:hidden">
        <Image
          src="/menu.png"
          alt="Menu"
          width={30}
          height={30}
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
        />
      </div>
      {open && (
        <div className="absolute top-full right-0 z-10 w-full bg-white flex flex-col items-center justify-center gap-2.5 p-4 shadow-lg">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {}
        </div>
      )}
    </div>
  );
};

export default Links;