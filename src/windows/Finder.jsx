import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import useFinderStore from "#store/finder";

import clsx from "clsx";
import { Search, Folder } from "lucide-react";

import { useEffect, useRef, memo, useCallback, useState } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

// --- Memoized Finder Item (only re‑renders on own changes) ---
const FinderItem = memo(({ item, selected, onSelect, onOpen, transform }) => {
  return (
    <div
      data-id={item.id}
      className={clsx(
        "finder-item absolute w-28 flex flex-col items-center rounded-xl cursor-pointer select-none transition-colors duration-200",
        selected
          ? "bg-blue-500/20 ring-2 ring-blue-500/50"
          : "hover:bg-gray-100/80"
      )}
      style={{
        transform: transform,
        willChange: "transform",
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(item.id, e.metaKey || e.ctrlKey);
      }}
      onDoubleClick={() => onOpen(item)}
    >
      <img
        src={item.icon}
        alt={item.name}
        className="w-16 h-16 object-contain pointer-events-none drop-shadow-sm"
        loading="lazy"
      />
      <p className="mt-2 text-xs font-medium text-center text-gray-700 leading-tight break-words px-1 max-w-full">
        {item.name}
      </p>
    </div>
  );
});

FinderItem.displayName = "FinderItem";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const {
    positions,
    setPosition,
    selectedIds,
    select,
    clearSelection,
  } = useFinderStore();

  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // --- Responsive ---
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Initial grid (5 columns) ---
  const generateInitialPosition = useCallback((index) => {
    const spacingX = 130;
    const spacingY = 120;
    const col = index % 5;
    const row = Math.floor(index / 5);
    return { x: col * spacingX + 25, y: row * spacingY + 25 };
  }, []);

  // --- Desktop drag setup (re‑runs on location or desktop change) ---
  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".finder-item");
    if (items.length === 0) return;

    // Ensure every item has a saved position; apply to DOM
    items.forEach((el, index) => {
      const id = el.dataset.id;
      let pos = positions[id];
      if (!pos) {
        const initial = generateInitialPosition(index);
        pos = { x: initial.x, y: initial.y };
        setPosition(id, pos);
      }
      // Apply transform directly (Draggable will read this)
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    });

    // Create draggable instances
    const draggables = Draggable.create(items, {
      type: "x,y",
      bounds: container,
      inertia: false,
      onPress() {
        this.update();
        this.target.style.zIndex = "1000";
        const windowEl = this.target.closest("section");
        if (windowEl?.windowDrag) windowEl.windowDrag.disable();
      },
      onRelease() {
        this.target.style.zIndex = "";
        const windowEl = this.target.closest("section");
        if (windowEl?.windowDrag) windowEl.windowDrag.enable();
      },
      onDragEnd() {
        const id = this.target.dataset.id;
        const snap = 90;
        const snappedX = Math.round(this.x / snap) * snap;
        const snappedY = Math.round(this.y / snap) * snap;

        gsap.to(this.target, {
          x: snappedX,
          y: snappedY,
          duration: 0.25,
          ease: "power3.out",
          overwrite: "auto",
        });

        setPosition(id, { x: snappedX, y: snappedY });
      },
    });

    return () => {
      draggables.forEach((drag) => drag.kill());
    };
  }, [isDesktop, activeLocation, positions, generateInitialPosition, setPosition]);

  // --- Open files/folders ---
  const openItem = useCallback(
    (item) => {
      if (!item) return;
      if (item.kind === "folder") {
        setActiveLocation(item);
        return;
      }
      if ((item.fileType === "url" || item.fileType === "fig") && item.href) {
        window.open(item.href, "_blank");
        return;
      }
      if (item.fileType === "pdf") return openWindow("resume");
      if (item.fileType === "img") return openWindow("imgfile", item);
      if (item.fileType === "txt") return openWindow("txtfile", item);
      if (item.fileType === "web") return openWindow("safari", item);
      console.warn("Unknown file type:", item);
    },
    [openWindow, setActiveLocation]
  );

  // --- Selection handler ---
  const handleSelect = useCallback(
    (id, multi) => select(id, multi),
    [select]
  );

  // --- Sidebar section (with mobile visibility control) ---
  const renderSection = (title, items, hideOnMobile = false) => (
    <div className={clsx("space-y-1 shrink-0", hideOnMobile && "hidden lg:block")}>
      <h3 className="hidden lg:block text-[10px] uppercase tracking-wider text-gray-400 font-semibold px-2">
        {title}
      </h3>
      <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-1 scrollbar-hide">
        {items?.filter(Boolean).map((item) => {
          const active = activeLocation?.id === item.id;
          return (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={clsx(
                "flex items-center gap-2 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap px-3 py-2 text-sm",
                active
                  ? "bg-blue-500 text-white shadow-md"
                  : "hover:bg-gray-200/70 text-gray-700"
              )}
            >
              <img
                src={item.icon}
                alt=""
                className="w-4 h-4 object-contain"
                loading="lazy"
              />
              <span className="font-medium">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const itemCount = activeLocation?.children?.length || 0;

  return (
    <div className="flex flex-col h-full bg-gray-50/80 overflow-hidden rounded-xl shadow-2xl backdrop-blur-sm">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between h-12 px-3 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
        <WindowControls target="finder" />
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 truncate max-w-[60%]">
          <Folder size={14} className="text-blue-500 flex-shrink-0" />
          <span className="truncate">{activeLocation?.name || "Finder"}</span>
        </div>
        <Search size={16} className="text-gray-400" />
      </header>

      {/* Main */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside
          className={clsx(
            "bg-white/50 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-gray-200/70 p-3 space-y-3",
            "lg:w-60 overflow-x-auto lg:overflow-y-auto",
            "flex lg:flex-col gap-2"
          )}
        >
          {renderSection("Favorites", Object.values(locations))}
          {locations.work?.children &&
            renderSection("Work", locations.work.children, true)}{" "}
          {/* hide on mobile */}
        </aside>

        {/* Content */}
        <main
          ref={containerRef}
          onClick={clearSelection}
          className="flex-1 relative bg-white/60 backdrop-blur-sm overflow-y-auto lg:overflow-hidden p-4 lg:p-5"
        >
          {itemCount > 0 ? (
            <>
              {/* Desktop draggable grid */}
              <div className="hidden lg:block w-full h-full relative">
                {activeLocation.children.map((item, index) => {
                  const pos = positions[item.id];
                  const initial = generateInitialPosition(index);
                  const x = pos?.x ?? initial.x;
                  const y = pos?.y ?? initial.y;
                  const transform = `translate3d(${x}px, ${y}px, 0)`;
                  const selected = selectedIds.includes(item.id);

                  return (
                    <FinderItem
                      key={item.id}
                      item={item}
                      selected={selected}
                      transform={transform}
                      onSelect={handleSelect}
                      onOpen={openItem}
                    />
                  );
                })}
              </div>

              {/* Mobile / Tablet grid */}
              <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {activeLocation.children.map((item) => {
                  const selected = selectedIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(item.id, false);
                      }}
                      onDoubleClick={() => openItem(item)}
                      className={clsx(
                        "flex flex-col items-center justify-center rounded-2xl border border-gray-200/80 bg-white p-4 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm hover:shadow-md",
                        selected
                          ? "ring-2 ring-blue-500 bg-blue-50/70"
                          : "hover:border-blue-300"
                      )}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-14 h-14 object-contain"
                        loading="lazy"
                      />
                      <p className="mt-2 text-xs font-medium text-center text-gray-700 break-words">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <Folder size={48} className="opacity-40" strokeWidth={1.5} />
                <p className="text-lg font-medium text-gray-500">Empty Folder</p>
                <p className="text-sm">No items in this location.</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Status Bar */}
      <div className="h-8 px-4 border-t border-gray-200/70 bg-white/60 backdrop-blur-sm flex items-center justify-between text-xs text-gray-500">
        <span>
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </span>
        <span className="truncate">{activeLocation?.path || ""}</span>
      </div>
    </div>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;