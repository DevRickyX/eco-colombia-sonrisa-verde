
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="inicio">
        <Hero />
      </div>
      <div id="servicios">
        <Services />
      </div>
      <div id="nosotros">
        <About />
      </div>
      <div id="impacto">
        <Impact />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
