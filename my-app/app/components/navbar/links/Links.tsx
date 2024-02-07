"use client";

import { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
//import { handleLogout } from "@/lib/action";

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
      className={`min-w-[100px] p-2.5 rounded-lg font-medium text-center ${pathName === item.path ? 'bg-[var(--text)] text-[var(--bg)]' : ''} hover:bg-opacity-75 transition-colors`}
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
    <div>
      <div className="flex items-center gap-2.5">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
           
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="Menu"
        width={30}
        height={30}
        onClick={() => setOpen(!open)}
        className="cursor-pointer md:hidden"
      />
      {open && (
        <div className="absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-[var(--bg)] flex flex-col items-center justify-center gap-2.5 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
