'use client';

import { useEffect } from 'react';
import styles from './reveal.module.scss';

export default function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  // make elements appear on scroll
  function reveal() {
    const reveals = document.querySelectorAll(`.${styles.reveal}`);
    for (var i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add(`${styles.reveal_active}`);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', reveal);
    reveal();
  }, []);

  return <div className={`${styles.reveal} ${className}`}>{children}</div>;
}
