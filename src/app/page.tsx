import Image from 'next/image';
import styles from './page.module.scss';
import { Source_Serif_4 } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareThreads,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import bk from '../../public/matt_bk.jpg';
import { faClipboardCheck, faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';

const source_serif = Source_Serif_4({ subsets: ['latin'] });

const today = new Date();
const yearsExp = today.getFullYear() - 2015;

export default function Home() {
  return (
    <>
      <header className={styles.header_wrapper} style={{ backgroundImage: `url(${bk.src})` }}>
        <div className={styles.header}>
          <Image src="monogram_white.png" width={40} height={40} alt="" />
          <h1 className={source_serif.className}>Matt Brauner</h1>
          <hr />
          <h2>
            Senior Software Engineer
            <br />
            New York, NY
          </h2>
        </div>
      </header>

      <p className={styles.lead}>
        Senior technologist with {yearsExp} years of professional experience in full-stack web development, financial
        technology, and data analysis.
      </p>

      <main className={styles.main}>
        <div className={styles.content_grid}>
          <div>
            <h2>Education</h2>
            <div className={styles.img_wrap}>
              <Image src="colgate.png" alt="" width={75} height={75} />
              <p>
                <strong>Colgate University</strong>
                <br />
                Bachelor of Arts | Computer Science & Economics
                <br />
                2011 &ndash; 2015
              </p>
            </div>
          </div>

          <div>
            <h2>Work</h2>
            <div className={styles.img_wrap}>
              <Image src="blackrock.jpeg" alt="" width={75} height={75} />
              <p>
                <strong>BlackRock</strong>
                <br />
                Vice President | Senior Software Engineer II
                <br />
                2015 &ndash; Present
              </p>
            </div>
          </div>

          <div>
            <h2>Skills</h2>
            <ul>
              <li>Top 5% of Front End Developers</li>
              <li>Top 5% of JavaScript Developers</li>
              <li>Top 15% of Python Developers</li>
            </ul>
            <p>
              <small>* Based on LinkedIn skill assessment</small>
            </p>
          </div>

          <div>
            <h2>Interests</h2>
            <p>Clarinetist with a passion for art, science, technology, and aviation</p>
          </div>
        </div>
      </main>

      <div className={styles.social_links}>
        <Link className="fb" href="http://facebook.com/matt.brauner/" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faFacebookSquare} size="2xl" />
        </Link>

        <Link className="ig" href="http://instagram.com/matt.brauner/" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faInstagramSquare} size="2xl" />
        </Link>

        <Link className="thr" href="https://www.threads.net/@matt.brauner" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faSquareThreads} size="2xl" />
        </Link>

        <Link className="li" href="http://linkedin.com/in/matt-brauner/" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </Link>

        <Link href="http://github.com/mb4828" className="gh" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faGithubSquare} size="2xl" />
        </Link>
      </div>

      <footer className={styles.footer}>Copyright &copy; {today.getFullYear()} Matt Brauner</footer>
    </>
  );
}
