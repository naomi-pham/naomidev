import { Montserrat } from "next/font/google";
import Image from "next/image";
import SectionLayout from "../common/layout/SectionLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const About = () => {
  return (
    <SectionLayout title="About">
      <div className="mt-20 flex items-center justify-between">
        <div className="relative flex aspect-square w-[350px] items-end">
          <div className="relative z-10">
            <Image
              src="/avatar.png"
              alt="avatar"
              width={250}
              height={250}
              className=""
            />
            <p className="absolute right-4 top-4 text-center text-title-2 text-neutral-50/90">
              Naomi <span className="block">Pham</span>
            </p>
          </div>
          <h2
            className={`${montserrat.variable} absolute right-0 top-0 font-sans text-[320px] font-bold uppercase leading-[250px] text-primary-500`}
          >
            N
          </h2>
        </div>
        <div className="max-w-lg">
          <h4 className="text-heading-3 text-primary-500">
            Lorem ipsum dolor sit amet
          </h4>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Ac tellus fermentum velit
            vel quis eget varius integer. Pretium tempor vitae praesent cursus
            lacus. Quis cursus netus risus sit interdum posuere. Scelerisque
            habitasse aliquam adipiscing adipiscing cras turpis dui.
          </p>
          <ul className="ml-4 mt-4 flex list-disc items-center gap-10 marker:text-accent-500">
            <li>Writer</li>
            <li>Coder</li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
