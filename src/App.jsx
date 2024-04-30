import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Tech from "./components/Tech";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <Model />
      <HowItWorks />
      <Tech />

      {/* <Footer /> */}
    </main>
  );
};

export default App;
