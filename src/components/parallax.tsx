'use client';

import styles from './parallax.module.scss';
import { useEffect, useState } from 'react';

export default function Parallax({
  background = '',
  foreground = '',
  yOffset = 5,
  size = '80%',
}: {
  background?: string;
  foreground?: string;
  yOffset?: number;
  size?: string;
}) {
  const [aspectRatio, setAspectRatio] = useState('19 / 9');

  useEffect(() => {
    function aspectRatio() {
      if (window.innerWidth > 1920) {
        setAspectRatio('30 / 9');
      } else {
        setAspectRatio('19 / 9');
      }
    }

    function parallax() {
      // parallax effect
      const el = document.getElementById(styles.background);
      const el2 = document.getElementById(styles.foreground);
      const windowYOffset = window.pageYOffset;
      const wrapperHeight = document.getElementById(styles.wrapper)?.offsetHeight ?? 0;
      if (el && el2) {
        el.style.backgroundPosition = '50% ' + (windowYOffset * 0.6 + 1) + 'px';
        el2.style.backgroundPositionY = wrapperHeight / yOffset + windowYOffset * 0.3 + 1 + 'px';
      }
    }

    window.addEventListener('resize', aspectRatio);
    window.addEventListener('resize', parallax);
    window.addEventListener('scroll', parallax);
    aspectRatio();
    setTimeout(() => parallax(), 1);

    return () => {
      window.removeEventListener('resize', aspectRatio);
      window.removeEventListener('resize', parallax);
      window.removeEventListener('scroll', parallax);
    };
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
