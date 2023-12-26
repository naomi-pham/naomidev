import SectionLayout from "../common/layout/SectionLayout";

const Services = () => {
  return (
    <SectionLayout title="Services">
      <div className="mt-20 flex items-center justify-between">
        <div className="relative flex aspect-square w-[350px] items-center justify-center rounded-full bg-primary-500/50 text-center text-heading-3 text-neutral-50">
          Development
        </div>
        <div className="max-w-lg">
          <h4 className="text-heading-4 text-primary-500">
            Lorem ipsum dolor sit amet
          </h4>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Ac tellus fermentum velit
            vel quis eget varius integer. Pretium tempor vitae praesent cursus
            lacus. Quis cursus netus risus sit interdum posuere. Scelerisque
            habitasse aliquam adipiscing adipiscing cras turpis dui.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Services;
