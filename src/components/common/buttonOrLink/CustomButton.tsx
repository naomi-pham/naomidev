import { Montserrat } from "next/font/google";
import { type ButtonHTMLAttributes } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
}

const CustomButton = ({
  label,
  // onClick,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`w-fit rounded-2xl bg-accent-500 px-4 py-3 text-body-2 font-bold text-white transition duration-300 hover:bg-accent-500/80 focus:outline-none focus:ring focus:ring-accent-400 focus:ring-offset-1 ${montserrat.variable} font-sans`}
      // onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default CustomButton;
