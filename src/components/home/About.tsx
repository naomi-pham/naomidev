import AboutImage from "./components/AboutImage";
import ContentWrapper from "./components/ContentWrapper";
import SectionLayout from "../common/layout/SectionLayout";

const About = () => {
  return (
    <SectionLayout title="About" id="about" page={1} leftComponent={<AboutImage />}>
      <div>
        {/* <AboutImage /> */}
        <RightComponent />
      </div>
    </SectionLayout>
  );
};

const RightComponent = () => {
  return (
    <ContentWrapper title="Lorem ipsum dolor sit amet">
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur. Ac tellus fermentum velit vel
        quis eget varius integer. Pretium tempor vitae praesent cursus lacus.
        Quis cursus netus risus sit interdum posuere. Scelerisque habitasse
        aliquam adipiscing adipiscing cras turpis dui.
      </p>
      <ul className="ml-4 mt-6 flex list-disc items-center gap-10 marker:text-accent-500">
        <li>Writer</li>
        <li>Coder</li>
      </ul>
    </ContentWrapper>
  );
};

export default About;
