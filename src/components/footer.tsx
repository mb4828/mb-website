'use client';

import styles from './footer.module.scss';
import Link from 'next/link';
import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiLinkedinLine } from '@remixicon/react';

export default function Footer() {
  const today = new Date();

  return (
    <footer className={styles.footer}>
      <div className={styles.social_links}>
        <Link
          className={styles.link}
          href="https://facebook.com/matt.brauner/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <RiFacebookLine size={28} style={{ position: 'relative', left: '-.75px', top: '.75px' }} />
        </Link>

        <Link
          className={styles.link}
          href="https://instagram.com/matt.brauner/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <RiInstagramLine size={28} />
        </Link>

        <Link
          className={styles.link}
          href="https://linkedin.com/in/matt-brauner/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <RiLinkedinLine size={28} />
        </Link>

        <Link
          href="https://github.com/mb4828"
          className={styles.link}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <RiGithubLine size={28} />
        </Link>
      </div>

      <p>
        Built by me.{' '}
        <Link href="https://github.com/mb4828/mb-website" target="_blank" rel="noopener">
          View the code on GitHub
        </Link>
      </p>

      <p>&copy; {today.getFullYear()} Matt Brauner. All rights reserved.</p>
    </footer>
  );
}
