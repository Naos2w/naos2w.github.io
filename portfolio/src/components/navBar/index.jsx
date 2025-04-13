import React, { useState, useEffect, act } from "react";
// import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "home",
  },
  {
    label: "EXPERIENCE",
    to: "experience",
  },
  {
    label: "EDUCATION",
    to: "education",
  },
  {
    label: "CONTACT",
    to: "contact",
  },
];

const Navbar = ({ scrollToSection, activeSection }) => {
  const [ToggleIcon, setToggleIcon] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const scrollToSection = () => {
  //   skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const handleToggleIcon = () => {
    setToggleIcon(!ToggleIcon);
  };

  // ✅ 監聽捲動事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 滑動超過 50px 就切換
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar_container">
          <span className="navbar_container_logo">Tsung-Yu</span>
        </div>
        <ul className={`navbar_container_menu ${ToggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <button
                className={`navbar_container_menu_item_links ${
                  activeSection === item.to ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.to)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {/* {ToggleIcon ? <HiX size={30} /> : <FaBars size={30} />} */}
          <FaBars
            size={30}
            className={`nav-icon-bar ${ToggleIcon ? "hide" : "show"}`}
          />
          <HiX
            size={30}
            className={`nav-icon-x ${ToggleIcon ? "show" : "hide"}`}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
