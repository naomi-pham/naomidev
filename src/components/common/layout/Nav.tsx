"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center gap-10">
      {NavList.map((item) => (
        <li
          key={item.id}
          className={`${
            pathname === item.url ? "underline" : ""
          } text-primary-500 underline-offset-4`}
        >
          <Link href={item.url}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavList = [
  {
    id: 0,
    label: "Home",
    url: "/",
  },
  {
    id: 1,
    label: "Services",
    url: "/services",
  },
  {
    id: 2,
    label: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    label: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    label: "Contact",
    url: "/contact",
  },
];

export default Nav;
