'use client';

import { useEffect } from 'react';
import styles from './scroller.module.scss';

export default function Scroller({
  children,
  width,
  className,
}: {
  children: React.ReactNode;
  width: string;
  className?: string;
}) {
  useEffect(() => {
    // get the li elements within the scroller
    const scroller = document.querySelector(`.${styles.scroller}`);
    if (scroller) {
      const scrollerList = scroller.querySelector('ul');
      const scrollerContent = Array.from(scrollerList?.children || []);

      // clone the li elements and append them to the scroller
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as Element;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerList?.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className={`${styles.scroller} ${className}`} style={{ width: width }}>
      {children}
    </div>
  );
}
