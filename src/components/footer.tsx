'use client';

import styles from './footer.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
          <FontAwesomeIcon icon={faFacebookF} size="xl" />
        </Link>

        <Link
          className={styles.link}
          href="https://instagram.com/matt.brauner/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </Link>

        <Link
          className={styles.link}
          href="https://linkedin.com/in/matt-brauner/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
        </Link>

        <Link
          href="https://github.com/mb4828"
          className={styles.link}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
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
