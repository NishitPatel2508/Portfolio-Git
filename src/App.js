import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
          <Navbar/>
          <Hero/>
          <About/>
          <Services/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        
    </div>
  );
}

export default App;
