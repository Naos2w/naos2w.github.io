import React, { forwardRef } from "react";
import icons from "../../assets/images/Icons";
import "./styles.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineExpandLess, MdDesignServices } from "react-icons/md";
import {
  FaDatabase,
  FaServer,
  FaTools,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";
import { GoMilestone } from "react-icons/go";
import { RiSettings4Line } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { SiCplusplus } from "react-icons/si";

const Experience = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(new Map()); // 使用 Map 來管理多個展開狀態

  const handleToggle = (periodIndex, tag) => {
    setActiveIndex((prev) => {
      const newMap = new Map(prev);
      const key = `${periodIndex}-${tag}`;
      if (newMap.has(key)) {
        newMap.delete(key); // 如果已展開則關閉
      } else {
        newMap.clear(); // 關閉其他 tag，只展開當前的
        newMap.set(key, true);
      }
      return newMap;
    });
  };

  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  const {
    COnly,
    Csharp,
    Css3,
    CPlusplus,
    Dotnet,
    IBMDb2,
    Git,
    Javascript,
    React,
    VisualBasic,
    Vuejs,
    Vuetify,
    Html5,
  } = icons;

  const skillsIcons = [
    { name: "React", icon: React, iconClass: "" },
    { name: "Vuejs", icon: Vuejs, iconClass: "" },
    { name: "Vuetify", icon: Vuetify, iconClass: "" },
    { name: "HTML5", icon: Html5, iconClass: "" },
    { name: "CSS3", icon: Css3, iconClass: "" },
    { name: "Javascript", icon: Javascript, iconClass: "" },
    { name: "Git", icon: Git, iconClass: "" },
    { name: "C", icon: COnly, iconClass: "" },
    { name: "C++", icon: CPlusplus, iconClass: "" },
    { name: "C#", icon: Csharp, iconClass: "" },
    { name: "dotNet", icon: Dotnet, iconClass: "" },
    { name: "IBMDb2", icon: IBMDb2, iconClass: "-ibmdb2" },
    { name: "VisualBasic", icon: VisualBasic, iconClass: "" },
  ];

  const workExperience = [
    {
      name: "Macronix International Co., LTD (MXIC)",
      duration: {
        periods: [
          {
            duration: "2022 - 2024",
            position: "Group Leader",
            // focus: "Project & Team Management",
            alltags: [
              "Frontend Development",
              "Require Analysis",
              "Team Leadership",
            ],
            responsibilities: [
              {
                tags: "Frontend Development",
                details: [
                  "Developed and maintained web front-end components for semiconductor automation.",
                ],
              },
              {
                tags: "Require Analysis",
                details: [
                  "Conducted system evaluation and planning to enhance automation efficiency.",
                ],
              },
              {
                tags: "Team Leadership",
                details: [
                  "Led project initiation, tracking, and management for automation systems.",
                  "Managed team resources and personnel and policies.",
                  "Organized internal workshops and knowledge-sharing sessions.",
                ],
              },
            ],
          },
          {
            duration: "2021 - 2022",
            position: "Lead Software Engineer",
            // focus: "UI Development & System Evaluation",
            alltags: ["UI/UX Development", "Require Analysis"],
            responsibilities: [
              {
                tags: "UI/UX Development",
                details: [
                  "Developed and maintained UI components for semiconductor automation systems.",
                ],
              },
              {
                tags: "Require Analysis",
                details: [
                  "Conducted system evaluation and planning for automation solutions.",
                  "Led requirement discussions for automation system improvements.",
                ],
              },
            ],
          },
          {
            duration: "2019 - 2021",
            position: "Senior Software Engineer",
            // focus: "Backend & System Planning",
            alltags: [
              "Backend Development",
              "System Optimization",
              "System Maintenance",
            ],
            responsibilities: [
              {
                tags: "Backend Development",
                details: [
                  "Developed and maintained backend software for semiconductor automation systems.",
                  "Designed and maintained watchdog software for automation processes.",
                ],
              },
              {
                tags: "System Optimization",
                details: [
                  "Planned and optimized semiconductor automation systems.",
                ],
              },
              {
                tags: "System Maintenance",
                details: [
                  "Performed maintenance and enhancement for the Real-Time Dispatching (RTD) system.",
                ],
              },
            ],
          },
          {
            duration: "2017 - 2019",
            position: "Software Engineer",
            // focus: "Backend Development & System Maintenance",
            alltags: [
              "Backend Development",
              "Database Management",
              "System Maintenance",
            ],
            responsibilities: [
              {
                tags: "Backend Development",
                details: [
                  "Developed and maintained backend software for semiconductor automation systems.",
                ],
              },
              {
                tags: "Database Management",
                details: [
                  "Established cross-environment DB2 database replication mechanisms.",
                  "Developed semi-automated solutions for database schema and data comparisons across different DB2 environments.",
                ],
              },
              {
                tags: "System Maintenance",
                details: [
                  "Managed and maintained TSM (Tivoli Storage Manager) tape backup systems.",
                  "Administered and maintained AIX systems, including Shell scripting development and deployment planning.",
                ],
              },
            ],
          },
          {
            duration: "before 2017",
            position: "Student",
            // focus: "Backend Development & System Maintenance",
            alltags: ["C/C++ Development"],
            responsibilities: [
              {
                tags: "C/C++ Development",
                details: ["Developed C/C++ programs for various projects."],
              },
            ],
          },
        ],
      },
    },
  ];

  // 優化動畫設定
  const animationConfig = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  return (
    <section ref={ref} id="experience" className="exp">
      <div className="exp_ctn">
        <motion.div
          className="exp_ctn_title"
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: 0.2 }}
        >
          Work Experience
        </motion.div>
        <div className="exp_ctn_exp_wrp">
          {workExperience.map((company, companyIndex) => (
            <div className="exp_ctn_exp_wrp_company" key={companyIndex}>
              <motion.div
                className="exp_ctn_exp_wrp_company_name"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3>{company.name}</h3>
              </motion.div>
              {company.duration.periods.map((period, periodIndex) => (
                <motion.div
                  className="exp_ctn_exp_wrp_company_wrp"
                  key={periodIndex}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + periodIndex * 0.1 }}
                >
                  <div className="exp_ctn_exp_wrp_company_wrp_duration">
                    <span>{period.duration}</span>
                  </div>
                  <div className="exp_ctn_exp_wrp_company_wrp_position">
                    <span>{period.position}</span>
                  </div>
                  <div className="exp_ctn_exp_wrp_company_wrp_focus">
                    <div className="exp_ctn_exp_wrp_company_wrp_focus_tags">
                      <ul>
                        {period.alltags.map((tag, tagIndex) => {
                          // 產生一個對應 tag 的 class
                          const tagClass = tag
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/\//g, "-"); // 轉小寫、把空格和 `/` 換成 `-`

                          return (
                            <li
                              key={tagIndex}
                              className={`tag-${tagClass}`} // 動態加上對應的 class
                              onClick={() => handleToggle(periodIndex, tag)}
                            >
                              {tag === "Backend Development" && <FaServer />}
                              {tag === "Database Management" && <FaDatabase />}
                              {tag === "System Maintenance" && <FaTools />}
                              {tag === "UI/UX Development" && (
                                <MdDesignServices />
                              )}
                              {tag === "Require Analysis" && (
                                <FaProjectDiagram />
                              )}
                              {tag === "System Optimization" && (
                                <RiSettings4Line />
                              )}
                              {tag === "Team Leadership" && <GiTeamIdea />}
                              {tag === "Frontend Development" && <FaCode />}
                              {tag === "C/C++ Development" && <SiCplusplus />}
                              {tag}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="exp_ctn_exp_wrp_company_wrp_focus_ctn">
                      {period.responsibilities.map(
                        (responsibility, respIndex) => {
                          const key = `${periodIndex}-${responsibility.tags}`;
                          const isActive = activeIndex.has(key); // 判斷當前是否要顯示

                          return (
                            <div
                              key={respIndex}
                              className="exp_ctn_exp_wrp_company_wrp_focus_ctn_resp"
                            >
                              <div
                                className={`exp_ctn_exp_wrp_company_wrp_focus_ctn_resp_wrp ${
                                  isActive ? "show" : "hide"
                                }`}
                              >
                                <ul>
                                  {responsibility.details.map(
                                    (detail, detailIndex) => (
                                      <li key={detailIndex}>
                                        <GoMilestone />
                                        {detail}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          );
                        }
                      )}
                      {/* Show Less 按鈕，只在有展開的 tag 時顯示 */}
                      {Array.from(activeIndex.keys()).some((key) =>
                        key.startsWith(`${periodIndex}-`)
                      ) && (
                        <div className="exp_ctn_exp_wrp_company_wrp_focus_ctn_expand">
                          <button
                            className="exp_ctn_exp_wrp_company_wrp_focus_ctn_expand_btn"
                            onClick={() => setActiveIndex(new Map())}
                          >
                            <span>Show Less</span>
                            <MdOutlineExpandLess />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        <div className="exp_ctn_icon_wrp">
          <motion.div
            className="exp_ctn_icon_wrp_lists"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {skillsIcons.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                className="exp_ctn_icon_wrp_lists_item"
                initial="initial"
                animate="animate"
                variants={iconVariants((idx % 3) + 1.5)}
              >
                <skill.icon
                  className={`exp_ctn_icon_wrp_lists_item_icon${
                    skill.iconClass || ""
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});
export default Experience;
