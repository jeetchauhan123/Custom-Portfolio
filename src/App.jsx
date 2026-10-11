import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import CareerJourney from "./components/CareerJourney/CareerJourney";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <CareerJourney />
        <Contact />
      </main>
    </>
  );
}

export default App;
