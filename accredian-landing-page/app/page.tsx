import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import AccredianEdge from "./components/AccredianEdge";
import CAT from "./components/CAT";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import SupportCTA from "./components/SupportCTA";
import Footer from "./components/Footer";


export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">

      <Navbar />

      <section id="Home" className="section scroll-mt-24">
        <div className="section-inner">
          <Home />
        </div>
      </section>

      <section id="Stats" className="section scroll-mt-24">
        <div className="section-inner">
          <Stats />
        </div>
      </section>

      <section id="Clients" className="section scroll-mt-24">
        <div className="section-inner">
          <Clients />
        </div>
      </section>

      <section id="AccredianEdge" className="section scroll-mt-24">
        <div className="section-inner">
          <AccredianEdge />
        </div>
      </section>

      <section id="CAT" className="section scroll-mt-24">
        <div className="section-inner">
          <CAT />
        </div>
      </section>

      <section id="HowItWorks" className="section scroll-mt-24">
        <div className="section-inner">
          <HowItWorks />
        </div>
      </section>

      <section id="FAQs" className="section scroll-mt-24">
        <div className="section-inner">
          <FAQ />
        </div>
      </section>

      <section id="Testimonials" className="section scroll-mt-24">
        <div className="section-inner">
          <Testimonials />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SupportCTA />
        </div>
      </section>

      <Footer />

    </main>
  );
}
