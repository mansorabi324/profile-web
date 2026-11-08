import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer";
import Hero from "./views/sections/Hero";
import About from "./views/sections/About";
import Services from "./views/sections/Services";
import Portfolio from "./views/sections/Portfolio";
import Experience from "./views/sections/Experience";
import Contact from "./views/sections/Contact";
import { useRevealOnScroll } from "./controllers/useRevealOnScroll";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
