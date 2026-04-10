import { locations } from "#constants";
import useLoactionStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import Draggable from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLoactionStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder", {
      bounds: "#home",
      inertia: true,
    });
  }, []);

  return (
    <section id="home" className="relative w-full h-full">
      <ul className="relative w-full h-full">
        {projects.map((project) => (
          <li
            key={project.id}
            className="group folder absolute flex flex-col items-center cursor-pointer"
            style={{
              top: project.position?.top,
              left: project.position?.left,
              right: project.position?.right,
              bottom: project.position?.bottom,
            }}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img
              src="/images/folder.png"
              alt={project.name}
              className="w-12 h-12"
            />
            <p className="text-white text-sm text-center mt-1">
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;