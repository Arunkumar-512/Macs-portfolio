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


];
const Archive = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".timeline-item");

    // 🔥 GSAP Animation optimized for internal scrolling
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            scroller: scrollRef.current, // Tells GSAP to listen to this div's scroll
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] overflow-hidden">
      {/* HEADER: Fixed at top */}
      <div id="window-header" className="flex items-center px-4 py-2 bg-white border-b shrink-0 z-10">
        <WindowControls target="archive" />
        <h2 className="flex-1 text-center font-bold text-sm text-gray-700">Archive</h2>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto custom-archive-scrollbar scroll-smooth"
      >
        <div ref={containerRef} className="archive-container p-6 max-sm:p-4 max-w-2xl mx-auto">
          <h3 className="archive-title text-2xl font-black text-gray-900 mb-8 max-sm:text-xl max-sm:mb-6 tracking-tight">
            Developer Journey
          </h3>

          <div className="timeline relative border-l-2 border-blue-100 ml-4 max-sm:ml-2">
            {archiveData.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="timeline-item relative pl-8 pb-10 max-sm:pl-6 max-sm:pb-8">
                  
                  {/* DOT: Positioned on the line */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-sm" />

                  {/* CARD */}
                  <div className="timeline-card bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    
                    <div className="flex gap-4 max-sm:gap-3">
                      {/* ICON */}
                      <div className="timeline-icon shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <Icon size={20} />
                      </div>

                      {/* CONTENT */}
                      <div className="timeline-content flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="year font-bold text-blue-600 text-sm">{item.year}</span>
                          <span className="badge px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[10px] font-bold uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        <h4 className="text-gray-900 font-bold text-base max-sm:text-sm truncate">
                          {item.title}
                        </h4>
                        <p className="desc text-gray-500 text-sm max-sm:text-xs mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Styled Scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-archive-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-archive-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-archive-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-archive-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  );
};

export default WindowWrapper(Archive, "archive");