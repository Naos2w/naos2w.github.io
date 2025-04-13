import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <p className="footer_copyright">
          © {new Date().getFullYear()} Tsung-Yu. | All rights reserved.
        </p>
        <div className="footer_links">
          <a
            href="https://www.linkedin.com/in/你的linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/你的github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/你的instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
