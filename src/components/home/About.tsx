import { Montserrat } from "next/font/google";
import Image from "next/image";
import SectionLayout from "../common/layout/SectionLayout";
import CustomLink from "../common/buttonOrLink/CustomLink";
import ContentWrapper from "./components/ContentWrapper";
import { IconEmail, IconResume } from "../common/Icons";

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
        <div className="mt-6 flex flex-col sm:flex-row gap-y-6 gap-x-16">
          <div className="flex items-center gap-2">
            <i>
              <IconEmail size={21} />
            </i>
            <div className="flex items-center gap-2">
              <p>Email</p>
              <div className="aspect-square w-1 rounded-full bg-primary-500"></div>
              <CustomLink url="mailto:phambaonguyendn@gmail.com" isExternal>
                Contact me
              </CustomLink>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <i>
              <IconResume size={21} />
            </i>
            <div className="flex items-center gap-2">
              <p>CV</p>
              <div className="aspect-square w-1 rounded-full bg-primary-500"></div>
              <CustomLink
                url="https://www.canva.com/design/DAFOlR2tzW4/IZkGXO8j7RI-l2pd4-cyZw/view"
                isExternal
              >
                View my resume
              </CustomLink>
            </div>
          </div>
        </div>
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
      className={`${montserrat.variable} absolute -left-32 font-sans text-96 sm:text-[320px] font-bold uppercase leading-[250px] text-primary-500`}
    >
      N
    </h2>
  );
};

export default About;
