import HomeLayout from "~/components/common/layout/HomeLayout";
import StickyNav from "~/components/common/layout/StickyNav";
import About from "~/components/home/About";
import Banner from "~/components/home/Banner";
import Blog from "~/components/home/Blog";
import Contact from "~/components/home/Contact";
import Portfolio from "~/components/home/Portfolio";
import Services from "~/components/home/Services";

export default function HomePage() {
  return (
    <HomeLayout>
      <Banner />
      <div>
        <StickyNav />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    </HomeLayout>
  );
}
