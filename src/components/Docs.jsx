import React, { useRef } from 'react'
import { Tooltip } from 'react-tooltip';
import { gsap } from 'gsap';

import { docsApps } from '#constants'
import { useGSAP } from '@gsap/react';
import useWindowStore from '#store/window';

const Docs = () => {
  const {openWindow,closeWindow,windows} = useWindowStore();
  const docsRef = useRef(null);

  useGSAP(() => {
    const docs = docsRef.current;
    if (!docs) return;

    const icons = docs.querySelectorAll('.docs-icon');
    const animateIcons = (mouseX) => {
      const { left } = docs.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 2000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.3,
          ease: 'power1.out',
        })
      });
    };

    const handleMoveMouse = (e) => {
      const { left } = docs.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power1.out',
        }),
      );
    docs.addEventListener('mousemove', handleMoveMouse);
    docs.addEventListener('mouseleave', resetIcons);
    return () => {
      docs.removeEventListener('mousemove', handleMoveMouse);
      docs.removeEventListener('mouseleave', resetIcons);
    }
  });



const toggleApp = (app) => {
  if (!app.canOpen) return;

  console.log("=================================");
  console.log("Clicked App:", app.id);

  const win = windows[app.id];

  if (!win) {
    console.error(`❌ Window with id "${app.id}" not found.`);
    console.log("Available windows:", Object.keys(windows));
    return;
  }

  console.log("Before:", {
    isOpen: win.isOpen,
    isMinimized: win.isMinimized,
    isMaximized: win.isMaximized,
  });

  if (win.isOpen) {
    console.log("➡️ Closing", app.id);
    closeWindow(app.id);
  } else {
    console.log("➡️ Opening", app.id);
    openWindow(app.id);
  }

  // Wait for Zustand to update
  setTimeout(() => {
    const updated = useWindowStore.getState().windows[app.id];

    console.log("After:", {
      isOpen: updated.isOpen,
      isMinimized: updated.isMinimized,
      isMaximized: updated.isMaximized,
    });

    console.log("Full window state:", useWindowStore.getState().windows);
    console.log("=================================");
  }, 0);
};
  return (


    <section id='docs'>
      <div ref={ docsRef } className='docs-container'>
        { docsApps.map(({ id, name, icon, canOpen }) => (
          <div key={ id } className='relative flex justify-center'>
            <button
              type='button'
              className='docs-icon'
              aria-label={ name }
              data-tooltip-id="docs-tooltip"
              data-tooltip-content={ name }
              data-tooltip-delay-show={ 150 }
              disabled={ !canOpen }
              onClick={ () => toggleApp({ id, canOpen }) }
            >
              <img
                src={ `/images/${icon}` }
                alt={ name }
                loading='lazy'
                className={ canOpen ? ' ' : 'opacity-50' }
              />

            </button>
          </div>
        )) }
        <Tooltip id="docs-tooltip" place="top" className='tooltip' />
      </div>
    </section>
  )
}

export default Docs