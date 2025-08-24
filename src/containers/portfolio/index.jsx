import { forwardRef, useEffect, useState } from "react";
import "./styles.scss";
import { motion } from "framer-motion";

const Portfolio = forwardRef((props, ref) => {
  const projects = [
    {
      title: "Message Dashboard System",
      description:
        "A message board management system built with Next.js (App Router), Prisma ORM, and PostgreSQL/SQLite. Features include user registration, login, and posting, plus an admin dashboard for managing messages with charts. Developed with TypeScript, Material UI, and React hooks, with JWT authentication and API access control.",
      image: "project1.png",
      demoUrl: "https://prac-react-nextjs.vercel.app",
      codeUrl:
        "https://github.com/Naos2w/prac-react-nextjs/tree/master/3-prisma-crud-board",
    },
    {
      title: "Todo Task Manager",
      description:
        "A task manager application built with TypeScript and Material UI, featuring task creation, deletion, categorisation, and status toggling, with persistence via localStorage. The project leverages React hooks such as useReducer and useEffect for efficient state management and side-effect handling.",
      image: "project2.png",
      demoUrl: "https://prac-react-5gok.vercel.app/",
      codeUrl: "https://github.com/Naos2w/prac-react/tree/main/0-now-project",
    },
    {
      title: "AI Chat Assistant",
      description:
        "A simple web application built with Next.js, TypeScript, Prisma, Supabase authentication, and PostgreSQL, integrated with a Python-powered AI API that simulates an interactive AI assistant for conversational use.",
      image: "project1.png",
      demoUrl: "https://ai-chat-assistant-bay.vercel.app/",
      codeUrl: "https://github.com/Naos2w/ai-chat-assistant",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const updateVisibleCards = () => {
      const slider = document.querySelector(".portfolio_slider");
      if (slider) {
        const containerWidth = slider.offsetWidth;
        const cardWidth = 300; // min-width
        const count = Math.floor(containerWidth / cardWidth);
        setVisibleCards(count > 0 ? count : 1);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setShowAll(true);
        setCurrentIndex(0);
      } else {
        setShowAll(false); // slider mode
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (currentIndex > projects.length - visibleCards) {
      setCurrentIndex(Math.max(projects.length - visibleCards, 0));
    }
  }, [visibleCards, projects.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} id="portfolio" className="portfolio">
      <motion.div
        className="portfolio_title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Portfolio
      </motion.div>

      <div className="portfolio_slider">
        <motion.div
          className="portfolio_track"
          animate={{
            x: `-${currentIndex * (200 / visibleCards)}%`,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {projects.map((project, idx) => (
            <div
              className={`portfolio_card ${
                showAll ? "" : currentIndex === idx ? "" : "dimmed"
              }`}
              style={{ flex: showAll ? "1 1 33.33%" : "0 0 100%" }}
              key={idx}
            >
              <div className="card_image">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p title={project.description}>{project.description}</p>

              <div className="card_buttons">
                <a
                  className="btn demo"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEMO
                </a>
                <a
                  className="btn code"
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CODE
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* dot */}
      {!showAll && projects.length > 1 && (
        <div className="portfolio_dots">
          {projects.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(idx)}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
});

export default Portfolio;
