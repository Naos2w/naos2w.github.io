import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Animate } from "react-simple-animate";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./styles.scss";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  const ShortIntro = `Software Engineer with experience in developing and maintaining semiconductor automation systems at Macronix. `;
  // const navi = useNavigate();

  // const handleNaviToContactPage = () => {
  //   navi("/contact");
  // };

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

  return (
    <section id="home" className="home">
      <div className="home_info">
        <motion.div
          className="home_info_text-wrapper"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1>Hello, I'm </h1>
          <h1 className="home_info_text-wrapper_lastname">Tsung-Yu.</h1>
          <p>{ShortIntro}</p>
        </motion.div>
        <motion.div
          className="home_info_portrait-wrapper"
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
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
};
export default Home;
