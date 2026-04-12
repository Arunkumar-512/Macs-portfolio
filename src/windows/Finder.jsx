import { WindowControls } from '#components'
import { locations } from '#constants/index.js'
import WindowWrapper from '#hoc/WindowWrapper'
import useLoactionStore from '#store/location.js'
import useWindowStore from '#store/window.js'
import useFinderStore from '#store/finder'
import clsx from 'clsx'
import { Search } from 'lucide-react'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Draggable from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

const Finder = () => {
  const { openWindow } = useWindowStore()
  const { activeLocation, setActiveLocation } = useLoactionStore()

  const {
    positions,
    setPosition,
    selectedIds,
    select,
    clearSelection,
  } = useFinderStore()

  const containerRef = useRef(null)

  // 🔥 GRID GENERATOR
  const generateInitialPosition = (index) => {
    const spacingX = 110
    const spacingY = 110

    const col = index % 4
    const row = Math.floor(index / 4)

    return {
      x: col * spacingX + 20,
      y: row * spacingY + 20,
    }
  }

  // 🔥 GSAP DRAG SYSTEM
  useEffect(() => {
    const elements = document.querySelectorAll(".finder-item")

    // ✅ sync GSAP with saved positions
    elements.forEach((el, index) => {
      const id = el.dataset.id
      const saved = positions[id]

      const initial = generateInitialPosition(index)

      const x = saved?.x ?? initial.x
      const y = saved?.y ?? initial.y

      // ✅ store initial only once (no infinite loop)
      if (!saved) {
        setPosition(id, { x, y })
      }

      gsap.set(el, { x, y })
    })

    const draggables = Draggable.create(".finder-item", {
      bounds: containerRef.current,

      onPress() {
        this.update()
        this.target.style.zIndex = 1000
      },

      onRelease() {
        this.target.style.zIndex = ""
      },

      onDragEnd() {
        const id = this.target.dataset.id

        const snap = 80
        const snappedX = Math.round(this.x / snap) * snap
        const snappedY = Math.round(this.y / snap) * snap

        gsap.to(this.target, {
          x: snappedX,
          y: snappedY,
          duration: 0.2,
          ease: "power2.out",
        })

        setPosition(id, {
          x: snappedX,
          y: snappedY,
        })
      },
    })

    return () => {
      draggables.forEach((d) => d.kill())
    }
  }, [activeLocation])
const openItem = (item) => {
  if (!item) return;

  // 📁 Folder
  if (item.kind === "folder") {
    setActiveLocation(item);
    return;
  }

  // 🌐 External link
  if ((item.fileType === "url" || item.fileType === "fig") && item.href) {
    window.open(item.href, "_blank");
    return;
  }

  // 📄 PDF
  if (item.fileType === "pdf") {
    openWindow("resume");
    return;
  }

  // 🖼 IMAGE ✅ FIXED
  if (item.fileType === "img") {
    openWindow("imgfile", item);
    return;
  }

  // 📝 TEXT ✅ FIXED
  if (item.fileType === "txt") {
    openWindow("txtfile", item);
    return;
  }

  // 🌍 WEB
  if (item.fileType === "web") {
    openWindow("safari", item);
    return;
  }

  console.warn("❌ Unknown file type:", item);
};
  // 🔥 SIDEBAR
  const renderList = (name, items) => (
    <div className="space-y-2">
      <h3 className="text-[11px] font-semibold text-gray-400 uppercase px-2">
        {name}
      </h3>

      <ul className="flex flex-col gap-1 max-sm:flex-row max-sm:overflow-x-auto">
        {items?.filter(Boolean).map((item) => {
          const isActive = item.id === activeLocation?.id

          return (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={clsx(
                "flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 whitespace-nowrap",
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              )}
            >
              <img src={item.icon} className="w-4 h-4" alt={item.name} />
              <p className="text-sm font-medium truncate">{item.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      {/* BODY */}
      <div className="bg-white flex flex-col sm:flex-row h-full">

        {/* SIDEBAR */}
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work?.children || [])}
        </div>

        {/* CONTENT */}
        <div
          ref={containerRef}
          className="content relative w-full h-full overflow-hidden 
             max-sm:flex-1 max-sm:overflow-y-auto max-sm:p-3"
          onClick={() => clearSelection()}
        >
          {(activeLocation?.children || []).length > 0 ? (
            activeLocation.children.map((item) => {
              const saved = positions[item.id]

              const x = saved?.x ?? 0
              const y = saved?.y ?? 0

              const isSelected = selectedIds.includes(item.id)

              return (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={clsx(
                    "finder-item absolute flex flex-col items-center cursor-pointer select-none p-1 rounded",
                    isSelected && "bg-blue-500/20"
                  )}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0)`
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    select(item.id, e.metaKey || e.ctrlKey)
                  }}
                  onDoubleClick={() => openItem(item)}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-14 h-14 object-contain transition-transform duration-200"
                  />
                  <p className="text-xs text-center mt-1 w-24 truncate">
                    {item.name}
                  </p>
                </div>
              )
            })
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
              No items here
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow