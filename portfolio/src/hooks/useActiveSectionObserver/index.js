import { useEffect } from "react";

const useActiveSectionObserver = (setActiveSection) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const middle = scrollY + viewportHeight / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const sectionMiddle = sectionTop + rect.height / 2;
        const distance = Math.abs(middle - sectionMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      if (closestSection) {
        setActiveSection((prev) => {
          if (prev !== closestSection) {
            console.log(
              `%c[State]    ${new Date().toISOString()} - activeSection 改為: ${closestSection}`,
              "color: purple; font-weight: bold"
            );
            return closestSection;
          }
          return prev;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // 初始觸發一次

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setActiveSection]);
};

export default useActiveSectionObserver;
