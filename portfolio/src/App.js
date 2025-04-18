import "./App.scss";
import React, { useEffect, useRef, useState } from "react";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Experience from "./containers/experience";
import Education from "./containers/education";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";
import BackToTop from "./components/BackToTop";
import Footer from "./components/footer";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import ptcOpt from "./utils.js/particles";
import useActiveSectionObserver from "./hooks/useActiveSectionObserver";
import { Helmet } from "react-helmet";

function App() {
  // particle initialize
  const [init, setInit] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useActiveSectionObserver(setActiveSection);

  const particlesLoaded = (container) => {};

  // const location = useLocation();
  // const PtcInHomePage = location.pathname === "/";

  // 建立 useRef 來管理每個 section
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // 處理滾動
  const scrollToSection = (section) => {
    if (section === "home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "experience") {
      experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "skills") {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "education") {
      educationRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Website Logo and title */}
      <Helmet>
        {/* 網頁標題 */}
        <title>Tsung-Yu Tsai | Portfolio</title>
        {/* 基本 favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* 網頁描述 */}
        <meta name="description" content="Tsung-Yu Tsai's Portfolio" />
        {/* 網頁圖片 */}
        <meta property="og:image" content="/assets/images/logo.png" />
      </Helmet>
      {/* particles js */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={ptcOpt}
      />

      {/* navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      ></Navbar>
      {/* main page content */}
      <div className="App_main-page-content">
        <Home scrollToSection={scrollToSection} ref={homeRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        <Education ref={educationRef} />
        <Contact ref={contactRef} />
      </div>

      {/* Back To Top Button */}
      <BackToTop />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
