import { WindowControls } from '#components';
import { locations } from '#constants/index.js';
import WindowWrapper from '#hoc/WindowWrapper';
import useLoactionStore from '#store/location.js';
import useWindowStore from '#store/window.js';
import useFinderStore from '#store/finder';
import clsx from 'clsx';
import { Search } from 'lucide-react';

import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLoactionStore();

  const {
    positions,
    setPosition,
    selectedIds,
    select,
    clearSelection,
  } = useFinderStore();

  const containerRef = useRef(null);

  // 🔥 GRID GENERATOR
  const generateInitialPosition = useCallback((index) => {
    const spacingX = 110;
    const spacingY = 110;
    const col = index % 4;
    const row = Math.floor(index / 4);

    return {
      x: col * spacingX + 20,
      y: row * spacingY + 20,
    };
  }, []);

  // 🔥 FILE OPEN LOGIC
  const openItem = useCallback((item) => {
    if (!item) return;

    const actionMap = {
      folder: () => setActiveLocation(item),
      pdf: () => openWindow("resume"),
      img: () => openWindow("imgfile", item),
      txt: () => openWindow("txtfile", item),
      web: () => openWindow("safari", item),
      url: () => window.open(item.href, "_blank"),
      fig: () => window.open(item.href, "_blank"),
    };

    const action = actionMap[item.kind === "folder" ? "folder" : item.fileType];
    if (action) action();
    else console.warn("❌ Unknown file type:", item);
  }, [setActiveLocation, openWindow]);

  // 🔥 GSAP DRAG SYSTEM
  useEffect(() => {
    // gsap.context handles cleanup automatically
    let ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".finder-item");

      elements.forEach((el, index) => {
        const id = el.dataset.id;
        const saved = positions[id];
        const initial = generateInitialPosition(index);

        const x = saved?.x ?? initial.x;
        const y = saved?.y ?? initial.y;

        if (!saved) {
          setPosition(id, { x, y });
        }

        gsap.set(el, { x, y });
      });

      Draggable.create(".finder-item", {
        bounds: containerRef.current,
        inertia: true, // Optional: smoother feel if you have InertiaPlugin
        onPress() {
          this.update();
          this.target.style.zIndex = 1000;
        },
        onRelease() {
          this.target.style.zIndex = "";
        },
        onDragEnd() {
          const id = this.target.dataset.id;
          const snap = 80;
          const snappedX = Math.round(this.x / snap) * snap;
          const snappedY = Math.round(this.y / snap) * snap;

          gsap.to(this.target, {
            x: snappedX,
            y: snappedY,
            duration: 0.2,
            ease: "power2.out",
          });

          setPosition(id, { x: snappedX, y: snappedY });
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Kills all draggables and animations
  }, [activeLocation, positions, setPosition, generateInitialPosition]);

  const renderList = (name, items) => (
    <div className="space-y-2 mb-6 last:mb-0">
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3">
        {name}
      </h3>
      <ul className="flex flex-col gap-0.5 max-sm:flex-row max-sm:overflow-x-auto max-sm:px-2">
        {items?.filter(Boolean).map((item) => {
          const isActive = item.id === activeLocation?.id;
          return (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={clsx(
                "flex items-center gap-2 px-3 py-1.5 rounded-md cursor-default select-none transition-colors whitespace-nowrap",
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200/60 active:bg-gray-300/60"
              )}
            >
              <img src={item.icon} className="w-4 h-4" alt="" />
              <p className="text-[13px] font-medium truncate">{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header" className="flex items-center px-4 py-1 gap-4">
        <WindowControls target="finder" />
        <div className="flex-1 flex justify-center">
            <div className="flex items-center bg-gray-100/80 px-2 py-0.5 rounded text-gray-400 w-full max-w-xs border border-gray-200/50">
               <Search size={12} className="mr-2" />
               <span className="text-[11px]">Search</span>
            </div>
        </div>
      </div>

      <div className="bg-white flex flex-col sm:flex-row h-full overflow-hidden">
        {/* SIDEBAR */}
        <div className="sidebar w-48 max-sm:w-full bg-gray-50/50 border-r border-gray-200/50 p-2 overflow-y-auto">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work?.children || [])}
        </div>

        {/* CONTENT AREA */}
        <div
          ref={containerRef}
          className="content relative flex-1 overflow-hidden max-sm:overflow-y-auto bg-white"
          onClick={() => clearSelection()}
        >
          {activeLocation?.children?.length > 0 ? (
            activeLocation.children.map((item) => {
              const saved = positions[item.id];
              const x = saved?.x ?? 0;
              const y = saved?.y ?? 0;
              const isSelected = selectedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={clsx(
                    "finder-item absolute flex flex-col items-center cursor-default select-none p-2 rounded-lg transition-shadow",
                    isSelected ? "bg-blue-500/20 shadow-inner" : "hover:bg-gray-100/40"
                  )}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                    width: '100px'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    select(item.id, e.metaKey || e.ctrlKey);
                  }}
                  onDoubleClick={() => openItem(item)}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />
                  <p className={clsx(
                    "text-[11px] text-center mt-1 w-full truncate px-1 rounded",
                    isSelected ? "bg-blue-600 text-white" : "text-gray-800"
                  )}>
                    {item.name}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-gray-400">
              <Search size={48} className="opacity-10 mb-2" />
              <p className="text-xs italic">Empty Folder</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;