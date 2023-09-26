'use client';

import styles from './page.module.scss';
import { useEffect } from 'react';
import { Source_Serif_4 } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareThreads,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import bk from '../../public/nyc_background.png';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import Chat from './chat';

const source_serif = Source_Serif_4({ subsets: ['latin'] });

export default function Home() {
  const today = new Date();
  const yearsExp = today.getFullYear() - 2015;

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

  // parallax effect
  function parallax() {
    const el = document.getElementById('header_wrapper');
    const windowYOffset = window.pageYOffset;
    if (el) {
      el.style.backgroundPosition = '50% ' + windowYOffset * 0.6 + 'px';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', reveal);
    window.addEventListener('scroll', parallax);
    reveal();
    parallax();
  }, []);

  return (
    <>
      {/* make sure background image loads first */}
      <Image src="nyc_background.png" width={0} height={0} alt="" priority={true} hidden={true} />

      <header id="header_wrapper" className={styles.header_wrapper} style={{ backgroundImage: `url(${bk.src})` }}>
        <div id="header" className={styles.header}>
          <Image src="monogram_white.png" width={40} height={40} alt="" priority={true} />
          <h1 className={source_serif.className}>Matt Brauner</h1>
          <hr />
          <h2>
            Senior Software Engineer
            <br />
            New York, NY
          </h2>
        </div>
        <Image
          src="matt_cutout.png"
          id="matt_cutout"
          className={styles.matt_cutout}
          width={100}
          height={100}
          alt=""
          priority={true}
        />
      </header>

      <main className={styles.main}>
        <div className={styles.content_grid}>
          <div className={`${styles.full_width} ${styles.reveal}`}>
            <h2>About</h2>
            <p>
              I&apos;m a senior technologist with {yearsExp} years of professional experience in full-stack web
              development, financial technology, and data analysis.
            </p>
          </div>

          <div className={styles.reveal}>
            <h2>Education</h2>
            <div className={styles.img_wrap}>
              <Image src="colgate.jpg" alt="" width={75} height={75} />
              <p>
                <strong>Colgate University</strong>
                <br />
                Bachelor of Arts | Computer Science & Economics
                <br />
                <span className="text-muted">2011 &ndash; 2015</span>
              </p>
            </div>
          </div>

          <div className={styles.reveal}>
            <h2>Work</h2>
            <div className={styles.img_wrap}>
              <Image src="blackrock.jpeg" alt="" width={75} height={75} />
              <p>
                <strong>BlackRock</strong>
                <br />
                Vice President | Senior Software Engineer II
                <br />
                <span className="text-muted">2015 &ndash; Present</span>
              </p>
            </div>
          </div>

          <div className={styles.reveal}>
            <h2>Skills</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faAward} style={{ marginRight: 4, color: '#125e8a' }} /> Top 5% of Front End
                Developers
              </li>
              <li>
                <FontAwesomeIcon icon={faAward} style={{ marginRight: 4, color: '#125e8a' }} /> Top 5% of JavaScript
                Developers
              </li>
              <li>
                <FontAwesomeIcon icon={faAward} style={{ marginRight: 4, color: '#125e8a' }} /> Top 15% of Python
                Developers
              </li>
            </ul>
            <p className="text-muted">Based on LinkedIn skill assessment</p>
          </div>

          <div className={styles.reveal}>
            <h2>Interests</h2>
            <p>Clarinetist with a passion for art, science, technology, and aviation</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.social_links}`}>
          <Link
            className="fb"
            href="http://facebook.com/matt.brauner/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="2xl" />
          </Link>

          <Link
            className="ig"
            href="http://instagram.com/matt.brauner/"
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
            href="http://linkedin.com/in/matt-brauner/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>

          <Link href="http://github.com/mb4828" className="gh" target="_blank" rel="noopener" aria-label="GitHub">
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

      <Chat />
    </>
  );
}
