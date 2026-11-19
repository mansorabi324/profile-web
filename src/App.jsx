import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer";
import Hero from "./views/sections/Hero";
import About from "./views/sections/About";
import Expertise from "./views/sections/Expertise";
import Highlights from "./views/sections/Highlights";
import Resume from "./views/sections/Resume";
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
        <Expertise />
        <Highlights />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
