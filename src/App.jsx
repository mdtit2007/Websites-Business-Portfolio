import React from "react";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolios from "./components/Portfolios";
import Team from "./components/Team";

function App() {
  return <div className="min-h-screen">
    <Headers />
    <Hero />
    <About />
    <Services />
    <Portfolios />
    <Team />
  </div>
}
export default App;