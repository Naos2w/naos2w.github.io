import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "EXPERIENCE",
    to: "/experience",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [ToggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!ToggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
            <span>Tsung-Yu</span>
          </Link>
        </div>
        <ul className={`navbar_container_menu ${ToggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link to={item.to} className="navbar_container_menu_item_links">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {ToggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
