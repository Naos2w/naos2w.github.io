import React, { forwardRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Animate } from "react-simple-animate";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./styles.scss";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { useState, useEffect } from "react";

const Home = forwardRef((props, ref) => {
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
            <span
              className={`home_info_text-wrapper_position_title ${
                fade ? "fade-in" : "fade-out"
              }`}
            >
              {positionTitle[currentIndex]}
            </span>
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
          <img src="portrait.jpg" alt="pho" />
        </motion.div>
      </div>
      {/* <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          opacity: "0",
        }}
        end={{
          opacity: "1",
        }}
      > */}
      <div className="home_contact-me">
        <motion.button
          initial="hidden"
          animate="visible"
          variants={HireMeVariants}
        >
          Hire Me
        </motion.button>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={ResumeVariants}
        >
          <span>
            Resume <BsDownload />
          </span>
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
          href="https://github.com/你的GitHub帳號"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="#EFF6E0" />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/你的LinkedIn帳號/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="#EFF6E0" />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/你的Instagram帳號/"
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
