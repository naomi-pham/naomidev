import Link from "next/link";
import React from "react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between py-6">
        <Link href="/">
          <p>Logo</p>
        </Link>

        <p className={`font-sans ${montserrat.variable} text-title-3 font-bold`}>Menu</p>
      </nav>
    </header>
  );
};

export default Header;
