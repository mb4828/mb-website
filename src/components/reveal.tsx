'use client';

import { useEffect, useId } from 'react';
import styles from './reveal.module.scss';

export default function Reveal({
  children,
  className,
  revealOnLoad = false,
}: {
  children: React.ReactNode;
  className?: string;
  revealOnLoad?: boolean;
}) {
  const id = useId();

  useEffect(() => {
    // make elements appear on scroll
    function reveal() {
      const reveals = document.querySelectorAll(`[id="reveal-${id}"]`);
      for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (revealOnLoad || elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add(`${styles.reveal_active}`);
        }
      }
    }

    window.addEventListener('scroll', reveal);
    window.addEventListener('resize', reveal);
    reveal();

    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('resize', reveal);
    };
  }, [revealOnLoad, id]);

  return (
    <div id={'reveal-' + id} className={`${styles.reveal} ${className}`}>
      {children}
    </div>
  );
}
