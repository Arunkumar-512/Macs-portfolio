import { locations } from "#constants";
import useLoactionStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useEffect, useState } from "react";

gsap.registerPlugin(Draggable);

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLoactionStore();
  const { openWindow } = useWindowStore();
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to disable/enable Draggable logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    if (isMobile) return; // Don't initialize Draggable on mobile grid

    Draggable.create(".folder", {
      bounds: "#home",
      inertia: true,
      onDragEnd: function() {
        // Optional: Save coordinates here if you want persistence
      }
    });
  }, [isMobile]);

  return (
    <section id="home" className="relative w-full h-full overflow-hidden">
      <ul 
        className={clsx(
          "relative w-full h-full",
          // 📱 MOBILE: Grid layout
          "max-sm:grid max-sm:grid-cols-3 max-sm:gap-4 max-sm:p-6 max-sm:overflow-y-auto",
          // 🖥️ DESKTOP: Canvas layout
          "sm:block"
        )}
      >
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx(
              "folder flex flex-col items-center cursor-pointer p-2 rounded-lg transition-colors hover:bg-white/10",
              // 🖥️ Desktop remains absolute
              "sm:absolute"
            )}
            style={!isMobile ? {
              top: project.position?.top || '20px',
              left: project.position?.left || '20px',
            } : {}}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img
              src="/images/folder.png"
              alt={project.name}
              className="w-12 h-12 max-sm:w-10 max-sm:h-10 drop-shadow-lg"
            />
            <p className="text-white text-[11px] sm:text-xs text-center mt-1 font-medium leading-tight max-sm:max-w-[80px]">
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;