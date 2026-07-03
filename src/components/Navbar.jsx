import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-11 px-3 md:px-6 bg-black/70 backdrop-blur-xl border-b border-white/10 flex items-center justify-between text-white">

      {/* LEFT */}
      <div className="flex items-center gap-4 md:gap-8">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group shrink-0">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="w-4 h-4 invert transition group-hover:scale-110"
          />

          {/* Hide on mobile */}
          <p className="hidden sm:block font-semibold text-sm whitespace-nowrap">
            Arun's Portfolio
          </p>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => openWindow(type)}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 md:gap-5">

        {/* Icons */}
        <ul className="hidden sm:flex items-center gap-3">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt=""
                className="w-4 h-4 opacity-80 hover:opacity-100 cursor-pointer"
              />
            </li>
          ))}
        </ul>

        {/* Clock */}
        <time className="text-xs sm:text-sm whitespace-nowrap">
          <span className="hidden sm:inline">
            {currentTime.format("ddd MMM D")}
          </span>

          <span className="ml-1">
            {currentTime.format("h:mm A")}
          </span>
        </time>
      </div>
    </nav>
  );
};

export default Navbar;