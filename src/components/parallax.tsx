'use client';

import styles from './parallax.module.scss';
import { useEffect } from 'react';

export default function Parallax({ background = '', foreground = '' }: { background?: string; foreground?: string }) {
  // parallax effect
  function parallax() {
    const el = document.getElementById(styles.background);
    const el2 = document.getElementById(styles.foreground);
    const windowYOffset = window.pageYOffset;
    const wrapperHeight = document.getElementById(styles.wrapper)?.offsetHeight ?? 0;
    if (el) {
      el.style.backgroundPosition = '50% ' + (windowYOffset * 0.6 + 1) + 'px';
    }
    if (el2) {
      el2.style.backgroundPositionY = wrapperHeight / 5 + windowYOffset * 0.3 + 'px';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', parallax);
    parallax();
  }, []);

  return (
    <div id={styles.wrapper}>
      <div id={styles.background} style={{ backgroundImage: `url(${background})` }}>
        <div id={styles.foreground} style={{ backgroundImage: `url(${foreground})` }}></div>
      </div>
    </div>
  );
}
