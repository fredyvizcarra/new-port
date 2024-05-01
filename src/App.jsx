import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Tech from "./components/Tech";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-black">
        <Navbar />
        <Hero />
        {/* <Features /> */}
        <Model />
        <HowItWorks />
        {/* <Tech /> */}
        <Projects />
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
