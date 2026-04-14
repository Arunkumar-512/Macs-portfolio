import { WindowControls } from '#components';
import { locations } from '#constants/index.js';
import WindowWrapper from '#hoc/WindowWrapper';
import useLoactionStore from '#store/location.js';
import useWindowStore from '#store/window.js';
import useFinderStore from '#store/finder';
import clsx from 'clsx';
import { Search } from 'lucide-react';

import { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLoactionStore();
  const [isMobile, setIsMobile] = useState(false);

  const {
    positions,
    setPosition,
    selectedIds,
    select,
    clearSelection,
  } = useFinderStore();

  const containerRef = useRef(null);
  const scrollableAreaRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const generateInitialPosition = useCallback((index) => {
    const spacingX = isMobile ? 90 : 110;
    const spacingY = isMobile ? 90 : 110;
    const columns = isMobile ? 3 : 4;
    return {
      x: (index % columns) * spacingX + 15,
      y: Math.floor(index / columns) * spacingY + 15,
    };
  }, [isMobile]);

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
  }, [setActiveLocation, openWindow]);

  // 🔥 GSAP DRAG SYSTEM - Disabled on mobile to favor scrolling
  useEffect(() => {
    if (isMobile) return; // Standard touch behavior is better for mobile folders

    let ctx = gsap.context(() => {
      Draggable.create(".finder-item", {
        bounds: containerRef.current,
        inertia: true,
        dragClickables: true,
        onPress() { this.target.style.zIndex = 1000; },
        onRelease() { this.target.style.zIndex = ""; },
        onDragEnd() {
          const id = this.target.dataset.id;
          const snap = 20; 
          const snappedX = Math.round(this.x / snap) * snap;
          const snappedY = Math.round(this.y / snap) * snap;
          gsap.to(this.target, { x: snappedX, y: snappedY, duration: 0.2 });
          setPosition(id, { x: snappedX, y: snappedY });
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeLocation, setPosition, isMobile]);

  const handleItemClick = (e, item) => {
    e.stopPropagation();
    select(item.id, e.metaKey || e.ctrlKey);
    if (isMobile) openItem(item);
  };

  const renderList = (name, items) => (
    <div className="space-y-1 mb-4 last:mb-0">
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-1">{name}</h3>
      <ul className="flex flex-col gap-0.5 max-sm:flex-row max-sm:overflow-x-auto max-sm:pb-2 no-scrollbar">
        {items?.filter(Boolean).map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              "flex items-center gap-2 px-3 py-1.5 rounded-md cursor-default select-none transition-colors whitespace-nowrap",
              item.id === activeLocation?.id ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200/60"
            )}
          >
            <img src={item.icon} className="w-4 h-4" alt="" />
            <p className="text-[12px] font-medium">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full bg-white overflow-hidden">
      {/* HEADER */}
      <div id="window-header" className="flex items-center px-4 py-2 border-b bg-gray-50/80 shrink-0">
        <WindowControls target="finder" />
        <div className="flex-1 flex justify-center px-4">
          <div className="flex items-center bg-gray-200/50 px-3 py-1 rounded-md text-gray-400 w-full max-w-xs">
            <Search size={12} className="mr-2" />
            <span className="text-[11px]">Search</span>
          </div>
        </div>
      </div>

      {/* MAIN VIEW */}
      <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <div className="sidebar w-44 max-sm:w-full bg-gray-50/50 border-r max-sm:border-b border-gray-200/50 p-2 shrink-0 overflow-y-auto">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work?.children || [])}
        </div>

        {/* CONTENT AREA */}
        <div
          ref={scrollableAreaRef}
          className="relative flex-1 bg-white overflow-y-auto custom-finder-scrollbar"
          onClick={() => clearSelection()}
        >
          <div 
            ref={containerRef} 
            className="min-h-full w-full p-4 relative"
            style={{ height: activeLocation?.children?.length > 12 ? 'auto' : '100%' }}
          >
            {activeLocation?.children?.map((item, index) => {
              const saved = positions[item.id];
              const initial = generateInitialPosition(index);
              const x = isMobile ? initial.x : (saved?.x ?? initial.x);
              const y = isMobile ? initial.y : (saved?.y ?? initial.y);
              const isSelected = selectedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={clsx(
                    "finder-item absolute flex flex-col items-center cursor-default select-none p-2 rounded-lg transition-colors",
                    isSelected ? "bg-blue-500/20 shadow-inner" : "hover:bg-gray-100/40"
                  )}
                  style={{ 
                    transform: `translate3d(${x}px, ${y}px, 0)`, 
                    width: isMobile ? '80px' : '95px' 
                  }}
                  onClick={(e) => handleItemClick(e, item)}
                  onDoubleClick={() => !isMobile && openItem(item)}
                >
                  <img src={item.icon} alt={item.name} className="w-10 h-10 max-sm:w-8 max-sm:h-8 object-contain pointer-events-none" />
                  <p className={clsx(
                    "text-[11px] text-center mt-1 w-full truncate px-1 rounded-sm",
                    isSelected ? "bg-blue-600 text-white" : "text-gray-800"
                  )}>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-finder-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-finder-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;