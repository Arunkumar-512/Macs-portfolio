import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const archiveData = [
  {
    year: "2022",
    title: "Started Coding Journey",
    description: "Learned HTML, CSS, and built my first static websites.",
  },
  {
    year: "2023",
    title: "Frontend Development",
    description: "Mastered React, built responsive and animated UIs.",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    description:
      "Built MERN applications with authentication, APIs, and dashboards.",
  },
  {
    year: "2025",
    title: "Advanced Projects",
    description:
      "Working on scalable apps, system design, and real-world production projects.",
  },
];

const Archive = () => {
  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="archive" />
        <h2>Archive</h2>
      </div>

      {/* CONTENT */}
      <div className="archive-container">
        <h3 className="archive-title">Developer Journey</h3>

        <div className="timeline">
          {archiveData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              
              <div className="timeline-content">
                <p className="year">{item.year}</p>
                <h4>{item.title}</h4>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ArchiveWindow = WindowWrapper(Archive, "archive");

export default ArchiveWindow;