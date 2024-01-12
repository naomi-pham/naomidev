import { Montserrat } from "next/font/google";
import Image from "next/image";
import { AboutLinks } from "~/constants/data";
import CustomLink from "../common/buttonOrLink/CustomLink";
import SectionLayout from "../common/layout/SectionLayout";
import ContentWrapper from "./components/ContentWrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const About = () => {
  return (
    <SectionLayout
      title="About"
      id="about"
      page={1}
      frontElement={<FrontElement />}
      backElement={<BackElement />}
    >
      <ContentWrapper title="Hi, I'm Naomi.">
        <p className="mt-4">
          A passionate front-end developer from Vietnam. I'm experienced in
          building interactive web apps with React / Next.js / TailwindCSS /
          Framer Motion. When not coding, I enjoy scouring the Internet for
          design ideas, tinkering with Figma, or writing.
        </p>
        <ul className="mt-6 flex flex-col flex-wrap gap-x-16 gap-y-6 sm:flex-row">
          {AboutLinks.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <i>{item.icon}</i>
              <div className="flex items-center gap-2">
                <p>{item.label}</p>
                <div className="aspect-square w-1 rounded-full bg-primary-500"></div>
                <CustomLink url={item.url} isExternal={item.isExternal}>
                  {item.linkText}
                </CustomLink>
              </div>
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </SectionLayout>
  );
};

const FrontElement = () => {
  return (
    <div className="relative z-10">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={250}
        height={250}
        className=""
      />
      <p className="absolute right-4 top-4 text-center text-title-2 text-zinc-500">
        Naomi <span className="block">Pham</span>
      </p>
    </div>
  );
};

const BackElement = () => {
  return (
    <h2
      className={`${montserrat.variable} text-96 absolute -left-32 font-sans font-bold uppercase leading-[250px] text-primary-500 sm:text-[320px]`}
    >
      N
    </h2>
  );
};

export default About;
