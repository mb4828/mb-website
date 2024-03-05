'use client';

import styles from './footer.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareThreads,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const today = new Date();

  return (
    <footer className={styles.footer}>
      <div className={styles.social_links}>
        <Link
          className="fb"
          href="https://facebook.com/matt.brauner/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="2xl" />
        </Link>

        <Link
          className="ig"
          href="https://instagram.com/matt.brauner/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
        </Link>

        <Link
          className="thr"
          href="https://www.threads.net/@matt.brauner"
          target="_blank"
          rel="noopener"
          aria-label="Threads"
        >
          <FontAwesomeIcon icon={faSquareThreads} size="2xl" />
        </Link>

        <Link
          className="li"
          href="https://linkedin.com/in/matt-brauner/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </Link>

        <Link href="https://github.com/mb4828" className="gh" target="_blank" rel="noopener" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
        </Link>
      </div>

      <p>Copyright &copy; {today.getFullYear()} Matt Brauner</p>

      <p>
        <Link href="https://github.com/mb4828/mb-website" target="_blank" rel="noopener">
          View the code for this webapp
        </Link>
      </p>
    </footer>
  );
}
