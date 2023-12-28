import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Menu = () => {
  return (
    <div>
      <p className={`font-sans ${montserrat.variable} text-title-3 font-bold`}>
        Menu
      </p>
    </div>
  );
};

export default Menu;
