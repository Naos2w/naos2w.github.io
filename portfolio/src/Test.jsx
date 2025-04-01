import { useState } from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaServer, FaTools } from "react-icons/fa";
import { SiReact, SiJavascript, SiCplusplus, SiDotnet } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skillsData = {
  "Backend Development": [
    "Developed and maintained backend software for automation systems.",
    "Established DB2 database replication mechanisms.",
  ],
  "Database Management": [
    "Developed semi-automated solutions for DB2 schema comparison.",
    "Managed Tivoli Storage Manager (TSM) tape backup systems.",
  ],
  "System Maintenance": [
    "Administered and maintained AIX systems.",
    "Developed Shell scripts for deployment automation.",
  ],
};

const icons = {
  "Backend Development": <FaServer className="text-yellow-400 text-lg" />,
  "Database Management": <FaDatabase className="text-blue-400 text-lg" />,
  "System Maintenance": <FaTools className="text-green-400 text-lg" />,
};

const skillIcons = [
  { icon: <SiReact className="text-blue-400 text-3xl" />, label: "React" },
  {
    icon: <SiJavascript className="text-yellow-300 text-3xl" />,
    label: "JavaScript",
  },
  { icon: <SiCplusplus className="text-blue-500 text-3xl" />, label: "C++" },
  { icon: <SiDotnet className="text-purple-500 text-3xl" />, label: ".NET" },
];

export default function SkillsTimeline() {
  const [activeSkill, setActiveSkill] = useState("Backend Development");

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      {/* Time Period & Position */}
      <div className="mb-4 text-lg">
        <span className="font-bold">
          Macronix International Co., LTD (MXIC)
        </span>{" "}
        | 2017 - 2019 | Software Engineer
      </div>

      {/* Skill Tabs */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(skillsData).map((skill) => (
          <Button
            key={skill}
            onClick={() => setActiveSkill(skill)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeSkill === skill
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {icons[skill]} <span className="ml-2">{skill}</span>
          </Button>
        ))}
      </div>

      {/* Skill Details */}
      <motion.div
        key={activeSkill}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-2">{activeSkill}</h3>
        <ul className="list-disc list-inside space-y-2">
          {skillsData[activeSkill].map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </motion.div>

      {/* Skill Icons */}
      <div className="flex space-x-6 mt-8 border-t border-gray-600 pt-4">
        {skillIcons.map(({ icon, label }, index) => (
          <div key={index} className="flex flex-col items-center">
            {icon}
            <span className="text-sm mt-2">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
