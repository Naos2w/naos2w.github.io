import React, { useEffect, useState, useRef } from "react";
import "./Test2.css";

const Timeline = () => {
  const timelineData = [
    { year: "入職", skill: "C/C++", icon: "🔷" },
    { year: "第一年", skill: "Python, SQL", icon: "🐍" },
    { year: "第二年", skill: "JavaScript, React", icon: "⚛️" },
    { year: "第三年", skill: "Node.js, .NET Core", icon: "🌍" },
    { year: "第四年 (離職前)", skill: "團隊管理, 架構設計", icon: "📈" },
  ];
  const [visible, setVisible] = useState([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            setVisible((prev) => [...new Set([...prev, index])]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始檢查
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${visible.includes(index) ? "show" : ""}`}
          ref={(el) => (itemsRef.current[index] = el)}
        >
          <div className="icon">{item.icon}</div>
          <div className="content">
            <h3>{item.year}</h3>
            <p>{item.skill}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
