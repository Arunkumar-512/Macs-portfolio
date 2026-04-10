import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const {
      focusWindow,
      windows,
      minimizeWindow,
      maximizeWindow,
      restoreWindow,
    } = useWindowStore();

    const { isOpen, zIndex, isMinimized, isMaximized } =
      windows[windowKey];

    const ref = useRef(null);
    const dragInstance = useRef(null);

    // 🔥 OPEN ANIMATION
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
        }
      );
    }, [isOpen, isMinimized]);

    // 🟡 MINIMIZE (FIXED)
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isMinimized) {
        gsap.killTweensOf(el);

        gsap.to(el, {
          scale: 0.5,
          opacity: 0,
          y: 120,
          duration: 0.25,
          onComplete: () => {
            el.style.display = "none";
          },
        });
      } else if (isOpen) {
        // 🔥 restore properly
        el.style.display = "block";

        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
          }
        );
      }
    }, [isMinimized]);
    // 🟢 MAXIMIZE (ONLY SIZE CHANGE)
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isMaximized) {
        gsap.to(el, {
          width: "95vw",
          height: "95vh",
          duration: 0.3,
        });
      } else {
        gsap.to(el, {
          width: 500,
          height: 350,
          duration: 0.3,
        });
      }
    }, [isMaximized]);

    // 🧠 DRAGGABLE
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const header = el.querySelector(".window-header");

      const [instance] = Draggable.create(el, {
        trigger: header || el,
        bounds: "body",

        onPress: () => {
          focusWindow(windowKey);
        },
      });

      dragInstance.current = instance;

      return () => instance.kill();
    }, []);

    // 👁️ ONLY HANDLE OPEN (NOT MINIMIZE)
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
        style={{ zIndex }}
        className="absolute bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <Component
          {...props}
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
          isMaximized={isMaximized}
        />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"
    })`;

  return Wrapped;
};

export default WindowWrapper;