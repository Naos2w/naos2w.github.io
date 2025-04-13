import React, { forwardRef } from "react";
import "./styles.scss";
import { motion } from "framer-motion";

const Education = forwardRef((propTypes, ref) => {
  const EdcHis = [
    {
      name: "Langports English Language College (AUS)",
      duration: "Sep. 2024 - Feb. 2025",
      degree: "General English / TOEIC / Cambridge Flexi / IELTS",
      content:
        "Completed courses in General English, Cambridge Flexi FCE, TOEIC, and IELTS, strengthening listening, speaking, reading, and writing skills.",
    },
    {
      name: "National Central University",
      duration: "Sep. 2021 - Jun. 2023",
      degree: "Master's in Information Management",
      content:
        "Studied E-commerce and gained foundational knowledge in Machine Learning.",
    },
    {
      name: "Chung Hua University (CHU)",
      duration: "Sep. 2012 - Jun. 2016",
      degree: "Bachelor's in Computer Science",
      content: "Acquired knowledge in computer hardware and software.",
    },
  ];

  return (
    <section ref={ref} id="education" className="edc">
      {/* Work Part */}
      {/* <div className="edc_ctn">
        <motion.div
          className="edc_ctn_title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          Experience
        </motion.div>
        <div className="edc_ctn_wrp">
          <div className="edc_ctn_wrp_textbox">
            <h3>Macronix International Co., LTD (MXIC)</h3>
            <p>
              Wafer Automation Selection System Optimized the wafer selection
              process, improving efficiency by 50%.
            </p>
          </div>
        </div>
      </div> */}
      {/* Education Part */}
      <div className="edc_ctn">
        <motion.div
          className="edc_ctn_title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.div>
        {EdcHis.map((edu, idx) => (
          <motion.div
            className="edc_ctn_wrp"
            key={idx}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="edc_ctn_wrp_textbox">
              <h3>{edu.name}</h3>
              <span>{edu.duration}</span>
              <br />
              <span>{edu.degree}</span>
              <p>{edu.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default Education;
