import "./App.scss";
import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Experience from "./containers/experience";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import ptcOpt from "./utils.js/particles";

function App() {
  // particle initialize
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  const location = useLocation();
  const PtcInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {PtcInHomePage && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={ptcOpt}
        />
      )}
      {/* navbar */}
      <Navbar></Navbar>
      {/* main page content */}
      <div className="App_main-page-content">
        <Home />
        {/* <Experience /> */}
        <Skills />

        {/* <Works />
        <Education /> */}
        {/* <Contact /> */}
        {/* <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes> */}
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
