import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const {
      windows,
      focusWindow,
      minimizeWindow,
      maximizeWindow,
      restoreWindow,
    } = useWindowStore();

    const { isOpen, isMinimized, isMaximized, zIndex } =
      windows[windowKey];

    const ref = useRef(null);
    const dragRef = useRef(null);
    const initialized = useRef(false);

    // ---------------------------------------
    // Initial Position (only once)
    // ---------------------------------------
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el || initialized.current) return;

      gsap.set(el, {
        x: 120,
        y: 80,
      });

      initialized.current = true;
    }, []);

    // ---------------------------------------
    // Open Animation
    // ---------------------------------------
    useGSAP(() => {
      const el = ref.current;

      if (!el || !isOpen || isMinimized) return;

      el.style.display = "block";

      gsap.killTweensOf(el);

      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.92,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.28,
          ease: "power2.out",
        }
      );
    }, [isOpen, isMinimized]);

    // ---------------------------------------
    // Minimize Animation
    // ---------------------------------------
    useGSAP(() => {
      const el = ref.current;

      if (!el || !isMinimized) return;

      gsap.killTweensOf(el);

      gsap.to(el, {
        opacity: 0,
        scale: 0.85,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }, [isMinimized]);

    // ---------------------------------------
    // Maximize / Restore
    // ---------------------------------------
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      gsap.to(el, {
        width: isMaximized ? "83vw" : 500,
        height: isMaximized ? "87vh" : 350,
        duration: 0.25,
        ease: "power2.out",
      });
    }, [isMaximized]);

    // ---------------------------------------
    // Window Draggable
    // ---------------------------------------
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [drag] = Draggable.create(el, {
        type: "x,y",
        trigger: el,
        bounds: "body",
        dragClickables: false,

        onPress(e) {
          focusWindow(windowKey);

          const target = e.target;

          // Don't move window when interacting
          // with Finder icons or excluded elements.
          if (
            target.closest(".finder-item") ||
            target.closest(".no-window-drag")
          ) {
            this.endDrag();
            return;
          }
        },
      });

      dragRef.current = drag;

      // Make draggable available to child components
      el.windowDrag = drag;

      return () => {
        delete el.windowDrag;
        drag.kill();
      };
    }, []);

    // ---------------------------------------
    // Visibility
    // ---------------------------------------
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (!isOpen) {
        el.style.display = "none";
      } else if (!isMinimized) {
        el.style.display = "block";
      }
    }, [isOpen, isMinimized]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex,
          top: 100,
          left: 100,
        }}
        className="absolute bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <Component
          {...props}
          isMaximized={isMaximized}
          onMinimize={(e) => {
            e?.stopPropagation();
            minimizeWindow(windowKey);
          }}
          onMaximize={(e) => {
            e?.stopPropagation();
            maximizeWindow(windowKey);
          }}
          onRestore={(e) => {
            e?.stopPropagation();
            restoreWindow(windowKey);
          }}
        />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;