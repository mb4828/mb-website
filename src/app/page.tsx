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
import { faAward } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Chat from './chat';
import city from '../../public/nyc_background.png';
import matt from '../../public/matt_cutout.png';

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
    const el2 = document.getElementById('matt_cutout');
    const windowYOffset = window.pageYOffset;
    const headerHeight = document.getElementById('header_wrapper')?.offsetHeight ?? 0;
    if (el) {
      el.style.backgroundPosition = '50% ' + windowYOffset * 0.6 + 'px';
    }
    if (el2) {
      el2.style.backgroundPositionY = headerHeight / 6 + windowYOffset * 0.3 + 'px';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', parallax);
    parallax();
    window.addEventListener('scroll', reveal);
    reveal();
  }, []);

  return (
    <>
      <header id="header_wrapper" className={styles.header_wrapper} style={{ backgroundImage: `url(${city.src})` }}>
        <div id="matt_cutout" className={styles.matt_cutout} style={{ backgroundImage: `url(${matt.src})` }}>
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
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content_grid}>
          <div className={`${styles.full_width} ${styles.reveal}`}>
            <p className="text-center">
              Matt is a New York City based technologist with {yearsExp} years of professional experience in full-stack
              web development, financial technology, and data analysis.
            </p>
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

          <div className={`${styles.full_width} ${styles.reveal}`}>
            <h2>Certifications</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faAward} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
                &nbsp;
                <Link href="https://www.hackerrank.com/certificates/1d2bd2382beb" target="_blank" rel="noopener">
                  Software Engineering | HackerRank
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faAward} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
                &nbsp;
                <Link href="https://www.linkedin.com/in/matt-brauner/details/skills/" target="_blank" rel="noopener">
                  Front-End Development | LinkedIn
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faAward} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
                &nbsp;
                <Link href="https://www.linkedin.com/in/matt-brauner/details/skills/" target="_blank" rel="noopener">
                  JavaScript | LinkedIn
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faAward} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
                &nbsp;
                <Link href="https://www.linkedin.com/in/matt-brauner/details/skills/" target="_blank" rel="noopener">
                  Python | LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.full_width} ${styles.reveal}`}>
            <h2>Interests</h2>
            <p>
              In his free time, Matt is an amateur clarinetist and saxophonist with over 20 years of performance
              experience. He can currently be heard in the&nbsp;
              <Link href="https://manhattanwindensemble.com" target="_blank" rel="noopener">
                Manhattan Wind Ensemble
              </Link>
              &nbsp;and the&nbsp;
              <Link href="https://jhorchestra.org" target="_blank" rel="noopener">
                Jackson Heights Orchestra
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.social_links}`}>
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

      <Chat />
    </>
  );
}
