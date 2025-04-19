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
            href="https://www.linkedin.com/in/tsung-yu-tsai-5516b5251"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Naos2w"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/na05ss"
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
