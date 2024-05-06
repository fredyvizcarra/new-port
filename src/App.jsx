import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Model from "./components/Model";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <BrowserRouter>
      <main className="bg-black">
        <Navbar />
        {isLoading ? ( // Condición para mostrar el componente de carga
          <Loading />
        ) : (
          <>
            <Hero />
            <Model />
            <HowItWorks />
            <Projects />
            <Footer />
          </>
        )}
      </main>
    </BrowserRouter>
  );
};

export default App;
