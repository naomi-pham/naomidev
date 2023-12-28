import AboutImage from "./components/AboutImage";
import ContentWrapper from "./components/ContentWrapper";
import SectionLayout from "../common/layout/SectionLayout";

const About = () => {
  return (
    <SectionLayout
      title="About"
      id="about"
      page={1}
      leftComponent={<AboutImage />}
    >
      <ContentWrapper title="Hi, I'm Naomi.">
        <p className="mt-2">
          I am an independent writer and front-end developer based in Vietnam. I
          enjoy designing, coding, and writing about front-end projects. This is
          my space to share my work and learnings. Hope you enjoy the tour
          around!
        </p>
        <ul className="ml-4 mt-6 flex list-disc items-center gap-10 marker:text-accent-500">
          <li>Writer</li>
          <li>Coder</li>
        </ul>
      </ContentWrapper>
    </SectionLayout>
  );
};

export default About;
