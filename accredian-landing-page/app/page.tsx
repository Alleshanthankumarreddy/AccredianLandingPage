import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import AccredianEdge from "./components/AccredianEdge";
import CAT from "./components/CAT";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import SupportCTA from "./components/SupportCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <Stats />
     <Clients />
     <AccredianEdge />
     <CAT />
     <HowItWorks />
     <FAQ />
     <Testimonials />
     <SupportCTA />
     <Footer />
    </>
  );
}
