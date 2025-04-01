import icons from "../../assets/images/Icons";
import "./styles.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { FaDatabase, FaServer, FaTools } from "react-icons/fa";
import { GoMilestone } from "react-icons/go";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null); // 記錄展開的項目

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
            duration: "2021 - 2022",
            position: "Lead Software Engineer",
            // focus: "UI Development & System Evaluation",
            alltags: [
              "UI/UX Development",
              "System Planning & Require Analysis",
            ],
            responsibilities: [
              {
                tags: "UI/UX Development",
                details: [
                  "Developed and maintained UI components for semiconductor automation systems.",
                ],
              },
              {
                tags: "System Planning & Require Analysis",
                details: [
                  "Conducted system evaluation and planning for automation solutions.",
                  "Led requirement discussions for automation system improvements.",
                ],
              },
            ],
          },
          {
            duration: "2022 - 2024",
            position: "Group Leader",
            // focus: "Project & Team Management",
            alltags: [
              "Frontend Development",
              "System Planning & Require Analysis",
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
                tags: "System Planning & Require Analysis",
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
        ],
      },
    },
  ];

  return (
    <section id="Skills" className="skills">
      <div className="skills_ctn">
        <motion.div
          className="skills_ctn_title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          Skills
        </motion.div>
        <div className="skills_ctn_exp_wrp">
          {/* <div className="skills_ctn_exp_wrp_company">
            <div className="skills_ctn_exp_wrp_company_name">
              <h3>Macronix International Co., LTD (MXIC)</h3>
            </div>
            <div className="skills_ctn_exp_wrp_company_wrp">
              <div className="skills_ctn_exp_wrp_company_wrp_duration">
                <span>2017 - 2019</span>
              </div>
              <div className="skills_ctn_exp_wrp_company_wrp_position">
                <span>Software Engineer</span>
              </div>
              <div className="skills_ctn_exp_wrp_company_wrp_focus">
                <div className="skills_ctn_exp_wrp_company_wrp_focus_tags">
                  <ul>
                    <li
                      className="backend"
                      onClick={() => setActiveIndex("server")}
                    >
                      <FaServer /> Backend Development
                    </li>
                    <li
                      className="dbmng"
                      onClick={() => setActiveIndex("dbmng")}
                    >
                      <FaDatabase /> Database Management
                    </li>
                    <li
                      className="sysmat"
                      onClick={() => setActiveIndex("sysmat")}
                    >
                      <FaTools /> System Maintenance
                    </li>
                  </ul>
                </div>
                <div className="skills_ctn_exp_wrp_company_wrp_focus_ctn">
                  <div
                    className={`skills_ctn_exp_wrp_company_wrp_focus_ctn_resp ${
                      activeIndex === "server" ? "show" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <GoMilestone />
                        Developed and maintained backend software for
                        semiconductor automation systems.
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`skills_ctn_exp_wrp_company_wrp_focus_ctn_resp ${
                      activeIndex === "dbmng" ? "show" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <GoMilestone />
                        Established cross-environment DB2 database replication
                        mechanisms.
                      </li>
                      <li>
                        <GoMilestone />
                        Developed semi-automated solutions for database schema
                        and data comparisons across different DB2 environments.
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`skills_ctn_exp_wrp_company_wrp_focus_ctn_resp ${
                      activeIndex === "sysmat" ? "show" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <GoMilestone />
                        Managed and maintained TSM (Tivoli Storage Manager) tape
                        backup systems.
                      </li>
                      <li>
                        <GoMilestone />
                        Administered and maintained AIX systems, including Shell
                        scripting development and deployment planning.
                      </li>
                    </ul>
                  </div>
                  {activeIndex != null && (
                    <div className="skills_ctn_exp_wrp_company_wrp_focus_ctn_expand">
                      <button
                        className="skills_ctn_exp_wrp_company_wrp_focus_ctn_expand_btn"
                        onClick={() => setActiveIndex(null)}
                      >
                        <span>Show Less</span>
                        <MdOutlineExpandLess />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div> */}
          {workExperience.map((company, companyIndex) => (
            <div className="skills_ctn_exp_wrp_company" key={companyIndex}>
              <div className="skills_ctn_exp_wrp_company_name">
                <h3>{company.name}</h3>
              </div>
              {company.duration.periods.map((period, periodIndex) => (
                <div
                  className="skills_ctn_exp_wrp_company_wrp"
                  key={periodIndex}
                >
                  <div className="skills_ctn_exp_wrp_company_wrp_duration">
                    <span>{period.duration}</span>
                  </div>
                  <div className="skills_ctn_exp_wrp_company_wrp_position">
                    <span>{period.position}</span>
                  </div>
                  <div className="skills_ctn_exp_wrp_company_wrp_focus">
                    <div className="skills_ctn_exp_wrp_company_wrp_focus_tags">
                      <ul>
                        {period.alltags.map((tag, tagIndex) => (
                          <li
                            key={tagIndex}
                            onClick={() => setActiveIndex(tag)}
                          >
                            {tag === "Backend Development" && <FaServer />}
                            {tag === "Database Management" && <FaDatabase />}
                            {tag === "System Maintenance" && <FaTools />}
                            {tag} {/* Display tag name */}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="skills_ctn_exp_wrp_company_wrp_focus_ctn">
                      {period.responsibilities.map(
                        (responsibility, respIndex) => (
                          <div
                            key={respIndex}
                            className={`skills_ctn_exp_wrp_company_wrp_focus_ctn_resp ${
                              activeIndex === responsibility.tags ? "show" : ""
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
                        )
                      )}
                      {activeIndex != null && (
                        <div className="skills_ctn_exp_wrp_company_wrp_focus_ctn_expand">
                          <button
                            className="skills_ctn_exp_wrp_company_wrp_focus_ctn_expand_btn"
                            onClick={() => setActiveIndex(null)}
                          >
                            <span>Show Less</span>
                            <MdOutlineExpandLess />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="skills_ctn_icon_wrp">
          <motion.div
            className="skills_ctn_icon_wrp_lists"
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            {skillsIcons.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                className="skills_ctn_icon_wrp_lists_item"
                initial="initial"
                animate="animate"
                variants={iconVariants((idx % 3) + 1.5)}
              >
                <skill.icon
                  className={`skills_ctn_icon_wrp_lists_item_icon${
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
};
export default Skills;
