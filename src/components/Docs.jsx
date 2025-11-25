import React, { useRef } from 'react'
import { Tooltip } from 'react-tooltip';
import { gsap } from 'gsap';

import { docsApps } from '#constants'
import { useGSAP } from '@gsap/react';

const Docs = () => {
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



  const toggleApp = (app) => { }
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