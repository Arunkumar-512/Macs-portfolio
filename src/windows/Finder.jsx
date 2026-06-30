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

  // 🔥 GRID GENERATOR (Only used for initial desktop placement)
  const generateInitialPosition = (index) => {
    const spacingX = 110
    const spacingY = 110
    const col = index % 4
    const row = Math.floor(index / 4)
    return { x: col * spacingX + 20, y: row * spacingY + 20 }
  }

  // 🔥 GSAP DRAG SYSTEM
  useEffect(() => {
    // Only initialize Draggable on desktop-sized screens
    if (window.innerWidth < 640) return

    const elements = document.querySelectorAll(".finder-item")
    
    elements.forEach((el, index) => {
      const id = el.dataset.id
      const saved = positions[id]
      const initial = generateInitialPosition(index)

      const x = saved?.x ?? initial.x
      const y = saved?.y ?? initial.y

      // Set initial position if not already saved
      if (!saved) setPosition(id, { x, y })
      
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

        setPosition(id, { x: snappedX, y: snappedY })
      },
    })

    return () => {
      draggables.forEach((d) => d.kill())
    }
  }, [activeLocation, setPosition]) // Added setPosition to dependencies

  const openItem = (item) => {
    if (!item) return
    if (item.kind === "folder") {
      setActiveLocation(item)
      return
    }
    if ((item.fileType === "url" || item.fileType === "fig") && item.href) {
      window.open(item.href, "_blank")
      return
    }
    if (item.fileType === "pdf") return openWindow("resume")
    if (item.fileType === "img") return openWindow("imgfile", item)
    if (item.fileType === "txt") return openWindow("txtfile", item)
    if (item.fileType === "web") return openWindow("safari", item)
    
    console.warn("❌ Unknown file type:", item)
  }

  const renderList = (name, items) => (
    <div className="space-y-2 shrink-0">
      <h3 className="text-[11px] font-semibold text-gray-400 uppercase px-2 max-sm:hidden">
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
                isActive ? "bg-blue-500 text-white shadow-sm" : "text-gray-700 hover:bg-gray-200"
              )}
            >
              <img src={item.icon} className="w-4 h-4" alt="" />
              <p className="text-sm font-medium truncate">{item.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div id="finder" className="flex flex-col h-full bg-white overflow-hidden">
      {/* HEADER */}
      <div id="window-header" className="flex items-center justify-between p-2 border-b bg-gray-50 shrink-0">
        <WindowControls target="finder" />
        <div className="flex-1 text-center text-[11px] font-bold text-gray-500 uppercase tracking-tight">Finder</div>
        <Search size={14} className="text-gray-400 mr-2" />
      </div>

      {/* BODY */}
      <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <div className="sidebar bg-gray-50/50 border-r border-gray-200 p-3 max-sm:border-r-0 max-sm:border-b">
          {renderList("Favorites", Object.values(locations))}
          {locations.work?.children && renderList("Work", locations.work.children)}
        </div>

        {/* CONTENT AREA */}
        <div
          ref={containerRef}
          className={clsx(
            "content flex-1 relative bg-white",
            "max-sm:grid max-sm:grid-cols-3 max-sm:gap-4 max-sm:p-4 max-sm:overflow-y-auto",
            "sm:overflow-hidden" // Desktop needs absolute tracking
          )}
          onClick={() => clearSelection()}
        >
          {(activeLocation?.children || []).length > 0 ? (
            activeLocation.children.map((item) => {
              const saved = positions[item.id]
              const isSelected = selectedIds.includes(item.id)

              return (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={clsx(
                    "finder-item flex flex-col items-center cursor-pointer select-none p-2 rounded-lg transition-colors",
                    "sm:absolute sm:w-24", // Absolute on desktop
                    isSelected ? "bg-blue-500/20" : "hover:bg-gray-100"
                  )}
                  style={{
                    // Only apply inline transform on desktop to let CSS Grid handle mobile
                    transform: saved && window.innerWidth > 640 
                      ? `translate3d(${saved.x}px, ${saved.y}px, 0)` 
                      : undefined
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
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain pointer-events-none"
                  />
                  <p className="text-[10px] sm:text-xs text-center mt-1 w-full truncate px-1 text-gray-800">
                    {item.name}
                  </p>
                </div>
              )
            })
          ) : (
            <div className="col-span-3 flex items-center justify-center w-full h-full text-gray-400 text-sm italic">
              No items here
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow