import Footer from "./footer/Footer";
import Header from "./header/Header";
import AboutMe from "./home/AboutMe";
import Display from "./home/Display";
import Projects from "./skills/Projects";
import Skills from "./skills/Skills";
import { TracingBeam } from "./ui/tracing-beam";

export default function App() {
  return (
    <>
    <TracingBeam className="px-6">

      <Header />
      <Display />
      <AboutMe />
      <Skills />
      <Projects />
    </TracingBeam>
      <Footer />
    
    </>
  )
}