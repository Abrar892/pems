import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Services from "@/app/components/services/Services";
import WhyPems from "@/app/components/whypems/WhyPems";
import Process from "@/app/components/process/Process";
import Cta from "@/app/components/cta/Cta";
import Footer from "@/app/components/footer/Footer";
import BackToTop from "@/app/components/backtotop/BackToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyPems />
      <Services />
      <Process />
      <Cta />
      <Footer />
      <BackToTop />
    </main>
  );
}
