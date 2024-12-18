import About from "@/components/About";
import Calltoaction from "@/components/Calltoaction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Work />
      <Services />
      <Testimonial />
      <Calltoaction />
      <Footer />
    </>
  );
}
