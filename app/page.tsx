import { Navbar }   from "./components/Navbar";
import { Hero }     from "./components/Hero";
import { Ticker }   from "./components/Ticker";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process }  from "./components/Process";
import { About }    from "./components/About";
import { Contact }  from "./components/Contact";
import { Footer }   from "./components/Footer";

export default function WebStudioPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Projects />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
