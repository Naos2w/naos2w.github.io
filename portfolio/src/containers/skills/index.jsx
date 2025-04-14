import React, { forwardRef } from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import icons from "../../assets/images/Icons";

const Skills = forwardRef((props, ref) => {
  const skillCategories = {
    "Frontend Development": [
      { name: "React", icon: icons.React, level: 3, isLearning: true },
      { name: "Vue.js", icon: icons.Vuejs, level: 4 },
      { name: "JavaScript", icon: icons.Javascript, level: 4 },
      { name: "HTML5", icon: icons.Html5, level: 4 },
      { name: "CSS3", icon: icons.Css3, level: 4 },
    ],
    "Backend Development": [
      { name: "C#", icon: icons.Csharp, level: 4 },
      { name: "C++", icon: icons.CPlusplus, level: 3 },
      { name: "C", icon: icons.COnly, level: 3 },
      { name: ".NET", icon: icons.Dotnet, level: 4 },
    ],
    "Database & Tools": [
      { name: "IBM DB2", icon: icons.IBMDb2, level: 4, iconClass: "-ibmdb2" },
      { name: "Git", icon: icons.Git, level: 4 },
      { name: "Visual Basic", icon: icons.VisualBasic, level: 3 },
    ],
  };

  const getLevelDescription = (level) => {
    switch (level) {
      case 1:
        return "Basic";
      case 2:
        return "Intermediate";
      case 3:
        return "Proficient";
      case 4:
        return "Advanced";
      case 5:
        return "Expert";
      default:
        return "Basic";
    }
  };

  // 添加動畫變體
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const barVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} id="skills" className="skills">
      <motion.div
        className="skills_title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Technical Skills
      </motion.div>

      <motion.div
        className="skills_container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(skillCategories).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              className="skills_category"
              variants={categoryVariants}
            >
              <h2>{category}</h2>
              <div className="skills_grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    variants={cardVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <div className="skill-icon-wrapper">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon
                          className={`skill-icon ${skill.iconClass || ""}`}
                        />
                      </motion.div>
                      {skill.isLearning && (
                        <motion.span
                          className="learning-badge"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          Learning
                        </motion.span>
                      )}
                    </div>
                    <h3>{skill.name}</h3>
                    <div className="skill-level">
                      <div className="level-bars">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <motion.div
                            key={num}
                            className={`level-bar ${
                              num <= skill.level ? "filled" : ""
                            }`}
                            variants={barVariants}
                            custom={num}
                          />
                        ))}
                      </div>
                      <motion.span
                        className="level-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {getLevelDescription(skill.level)}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
});

export default Skills;
