import Link from "next/link";
import React, { type ReactNode } from "react";

const CustomLink = ({
  url,
  children,
  isExternal,
}: {
  url: string;
  children: ReactNode;
  isExternal?: boolean;
}) => {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 text-primary-500 underline underline-offset-4 transition duration-300 hover:text-accent-500 hover:opacity-80"
      target={isExternal ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
