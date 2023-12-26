import { Montserrat } from "next/font/google";
import { type ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SectionLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-neutral-100">
      <div className="container mx-auto max-w-7xl">
        <h2
          className={`${montserrat.variable} relative font-sans text-heading-2 uppercase tracking-wider text-primary-500`}
        >
          {title}
          <span className="absolute left-4 top-4 text-heading-2 tracking-wider opacity-[0.08]">
            {title}
          </span>
        </h2>

        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
