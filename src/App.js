import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
  <div>
    <NavBar />
    <Home />
    <About />
    <Experiences />
    <Skills />
    <Contact />
  </div>
  );
}

export default App;
