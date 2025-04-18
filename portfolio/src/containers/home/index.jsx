import React, { forwardRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileDownload,
} from "react-icons/fa";
import "./styles.scss";
import { motion, AnimatePresence } from "framer-motion";
// import { BsDownload } from "react-icons/bs";
import { useState, useEffect } from "react";

const Home = forwardRef(({ scrollToSection }, ref) => {
  const ShortIntro = `Experienced software engineer with expertise in backend & frontend development, 
    system architecture, and team leadership. Passionate about creating scalable 
    and efficient automation solutions.`;

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const HireMeVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
  };
  const ResumeVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
  };
  const IconVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  };
  const positionTitle = [
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Technical Lead",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 先讓文字淡出
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % positionTitle.length);
        setFade(true); // 讓新文字淡入
      }, 500); // 淡出後 500ms 再切換
    }, 2000);

    return () => clearInterval(interval); // 清除計時器，避免記憶體洩漏
  }, [positionTitle.length]);

  return (
    <section ref={ref} id="home" className="home">
      <div className="home_info">
        <motion.div
          className="home_info_text-wrapper"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="home_info_text-wrapper_name">
            <span>Hello, I'm </span>
            <span className="home_info_text-wrapper_name_lastname">
              Tsung-Yu.
            </span>
          </div>

          <div className="home_info_text-wrapper_position">
            <span>I'm a </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={positionTitle[currentIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="home_info_text-wrapper_position_title"
              >
                {positionTitle[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="home_info_text-wrapper_intro">
            <p>{ShortIntro}</p>
          </div>
        </motion.div>
        <motion.div
          className="home_info_portrait-wrapper"
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {!imageLoaded && <div className="loading-spinner"></div>}
          <motion.img
            src="portrait.jpg"
            alt="個人照片"
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
      <div className="home_contact-me">
        <motion.button
          initial="hidden"
          animate="visible"
          variants={HireMeVariants}
          onClick={() => scrollToSection("contact")}
        >
          Hire Me
        </motion.button>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={ResumeVariants}
        >
          <a
            href="https://drive.google.com/file/d/1qaAteKgTTLVW5luNiqkZs1Qw12ksdy-N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            {/* Resume <BsDownload /> */}
            Resume{" "}
            <FaFileDownload
              size={22}
              style={{ verticalAlign: "middle", marginLeft: "5px" }}
            />
          </a>
        </motion.button>
      </div>
      <motion.div
        className="home_personal_links"
        initial="hidden"
        animate="visible"
        variants={IconVariants}
      >
        {/* GitHub */}
        <a
          href="https://github.com/Naos2w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="#EFF6E0" />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tsung-yu-tsai-5516b5251"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="#EFF6E0" />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/na05ss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color="#EFF6E0" />
        </a>
      </motion.div>
      {/* </Animate> */}
    </section>
  );
});
export default Home;
