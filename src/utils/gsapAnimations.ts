import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapScrollAnimations(deps: any[] = []) {
  useEffect(() => {
    // Wait for DOM to render completely
    const timer = setTimeout(() => {
      // 1. Reveal section headings & oversized typography
      const headings = document.querySelectorAll('.gsap-reveal-title');
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Reveal image elements gracefully
      const images = document.querySelectorAll('.gsap-reveal-img');
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Reveal cards and grid items with stagger
      const grids = document.querySelectorAll('.gsap-stagger-grid');
      grids.forEach((grid) => {
        const children = grid.children;
        if (children.length > 0) {
          gsap.fromTo(
            Array.from(children),
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: grid,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Refresh ScrollTrigger instances
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, deps);
}
