'use client';

import styles from './footer.module.scss';
import Link from 'next/link';
import { FacebookLogoIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';

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
          <FacebookLogoIcon size={28} weight="bold" />
        </Link>

        <Link
          className={styles.link}
          href="https://instagram.com/matt.brauner/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <InstagramLogoIcon size={28} weight="bold" />
        </Link>

        <Link
          className={styles.link}
          href="https://linkedin.com/in/matt-brauner/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <LinkedinLogoIcon size={28} weight="bold" />
        </Link>

        <Link
          href="https://github.com/mb4828"
          className={styles.link}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <GithubLogoIcon size={28} weight="bold" />
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
