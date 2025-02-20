'use client';

import styles from './parallax.module.scss';
import { useEffect } from 'react';

export default function Parallax({
  background = '',
  foreground = '',
  yOffset = 5,
  aspectRatio = '19 / 9',
  size = '80%',
}: {
  background?: string;
  foreground?: string;
  yOffset?: number;
  aspectRatio?: string;
  size?: string;
}) {
  useEffect(() => {
    function parallax() {
      // parallax effect
      const el = document.getElementById(styles.background);
      const el2 = document.getElementById(styles.foreground);
      const windowYOffset = window.pageYOffset;
      const wrapperHeight = document.getElementById(styles.wrapper)?.offsetHeight ?? 0;
      if (el && el2) {
        el.style.backgroundPosition = '50% ' + (windowYOffset * 0.6 + 1) + 'px';
        el2.style.backgroundPositionY = wrapperHeight / yOffset + windowYOffset * 0.3 + 'px';

        // fade out and blur as you scroll
        const opacity = Math.max(0, Math.min(1, (wrapperHeight - windowYOffset) / (wrapperHeight / 2)));
        const blur = Math.min(5, Math.max(0, (5 / (wrapperHeight / 2)) * (windowYOffset - wrapperHeight / 2)));
        el2.style.opacity = opacity.toString();
        el2.style.filter = `blur(${blur}px)`;
      }
    }

    window.addEventListener('scroll', parallax);
    parallax();
  }, [yOffset]);

  return (
    <div id={styles.wrapper}>
      <div id={styles.background} style={{ backgroundImage: `url(${background})`, aspectRatio: aspectRatio }}>
        <div
          id={styles.foreground}
          style={{ backgroundImage: `url(${foreground})`, backgroundSize: `auto ${size}` }}
        ></div>
      </div>
    </div>
  );
}
