import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GitBranch, Zap, Database, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const archiveData = [
  {
  id: 1,
  year: "2025",
  title: "Open Source Contributions",
  description:
    "Contributed to open-source projects, fixed bugs, and collaborated with global developers on GitHub.",
  icon: GitBranch,
  badge: "Open Source",
},
{
  id: 2,
  year: "2025",
  title: "Performance Optimization",
  description:
    "Improved application performance using lazy loading, code splitting, and efficient state management.",
  icon: Zap,
  badge: "Optimization",
},
{
  id: 3,
  year: "2026",
  title: "System Design & Scaling",
  description:
    "Learning advanced system design concepts including scalability, caching, and distributed systems.",
  icon: Database,
  badge: "System Design",
},
{
  id: 4,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},
{
  id: 5,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},
{
  id: 6,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},
{
  id: 7,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},
{
  id: 8,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},
{
  id: 9,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},
{
  id: 10,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},
{
  id: 11,
  year: "2026",
  title: "Mobile App Development",
  description:
    "Started building cross-platform mobile apps using modern frameworks and best practices.",
  icon: Smartphone,
  badge: "Mobile",
},





];

const Archive = () => {
  const containerRef = useRef(null);

  // 🔥 GSAP SCROLL ANIMATION
  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".timeline-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="archive" />
        <h2 className="flex-1 text-center font-semibold">Archive</h2>
      </div>

      {/* CONTENT */}
      <div ref={containerRef} className="archive-container">
        <h3 className="archive-title">Developer Journey</h3>

        <div className="timeline">
          {archiveData.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="timeline-item">
                
                {/* DOT */}
                <div className="timeline-dot" />

                {/* CARD */}
                <div className="timeline-card">
                  
                  {/* ICON */}
                  <div className="timeline-icon">
                    <Icon size={18} />
                  </div>

                  {/* CONTENT */}
                  <div className="timeline-content">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="year">{item.year}</span>

                      {/* BADGE */}
                      <span className="badge">
                        {item.badge}
                      </span>
                    </div>

                    <h4>{item.title}</h4>
                    <p className="desc">{item.description}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WindowWrapper(Archive, "archive");