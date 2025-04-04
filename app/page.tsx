import Header from "@/components/organisms/header/Header";
import FeaturedProjects from "@/components/organisms/home/FeaturedProjects";
import HomeAbout from "@/components/organisms/home/HomeAbout";
import Services from "@/components/organisms/home/Services";
import SlantedVideoAnimation from "@/components/organisms/home/SlantedVideoAnimation";
import Welcome from "@/components/organisms/home/Welcome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChooseUs from "@/components/organisms/home/ChooseUs";
import Solution from "@/components/organisms/home/Solution";
import Testimonies from "@/components/organisms/home/Testimonies";
import Faq from "@/components/organisms/home/Faq";
import Footer from "@/components/organisms/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <SlantedVideoAnimation />
      <HomeAbout />
      <FeaturedProjects />
      <Services />
      <ChooseUs />
      <Solution />
      <Testimonies />
      <Faq />
      <Footer />
    </>
  );
}
