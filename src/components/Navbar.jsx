import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window.js";
import clsx from "clsx";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [currentTime, setCurrentTime] = useState(dayjs());

  // Update clock every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 10000); // Check every 10s to keep it accurate
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar-container">
      {/* LEFT SECTION: Logo & Primary Links */}
      <div className="nav-left">
        <div className="flex items-center gap-2 cursor-pointer group">
          <img 
            src="/images/logo.svg" 
            alt="logo" 
            className="w-4 h-4 invert brightness-0 transition-transform group-hover:scale-110" 
          />
          <p className="font-bold text-sm max-sm:hidden">Arun's Portfolio</p>
        </div>

        <ul className="nav-links-list">
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)} className="nav-link-item">
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SECTION: Icons & Clock */}
      <div className="nav-right">
        <ul className="nav-icons-list">
          {navIcons.map(({ id, img }) => (
            <li key={id} className="flex items-center">
              <img 
                src={img} 
                alt={`icon-${id}`} 
                className="w-4 h-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
              />
            </li>
          ))}
        </ul>
        <time className="nav-time">
          {currentTime.format("ddd MMM D")} 
          <span className="ml-1.5">{currentTime.format("h:mm A")}</span>
        </time>
      </div>
    </nav>
  );
};

export default Navbar;