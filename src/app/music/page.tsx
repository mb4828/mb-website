import styles from './page.module.scss';
import Parallax from '@/components/parallax';
import Reveal from '@/components/reveal';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function MusicPage() {
  return (
    <>
      <Parallax background="/matt_clarinet_background.jpg" foreground="/matt_clarinet_cutout.png" size="82%"></Parallax>

      <main className={styles.main}>
        <Reveal revealOnLoad>
          <p className="text-center">
            Matt is an amateur clarinetist and saxophonist with over 20 years of performance experience. He began
            studying clarinet at age 9 under the guidance of Scott Singer. Inspired by his grandfather,&nbsp;
            <Link href="https://en.wikipedia.org/wiki/Buzz_Brauner" target="_blank" rel="noopener">
              Buzz Brauner
            </Link>
            , a New York City studio musican and woodwind doubler, Matt added saxophone to his repertoire in high school
            in order to play in the pit orchestra for school musicals. He performs regularly with orchestras and
            symphonic bands throughout New York City.
          </p>
        </Reveal>

        <Reveal>
          <h2>Instruments</h2>
          <ul>
            <li>Clarinets &mdash; B♭, E♭, A, Bass</li>
            <li>Saxophones &mdash; Soprano, Alto, Tenor</li>
          </ul>
        </Reveal>

        <Reveal>
          <h2>Ensembles Performed With</h2>
          <ul>
            <li>
              <Link href="https://manhattanwindensemble.com/" target="_blank" rel="noopener">
                Manhattan Wind Ensemble | Manhattan, NY
              </Link>
            </li>
            <li className="order_mobile_last">
              <Link
                href="https://www.colgate.edu/academics/departments-programs/department-music/music-groups/university-orchestra"
                target="_blank"
                rel="noopener"
              >
                Colgate University Orchestra | Hamilton, NY
              </Link>
            </li>
            <li>
              <Link href="https://jhorchestra.org/" target="_blank" rel="noopener">
                Jackson Heights Orchestra | Queens, NY
              </Link>
            </li>
            <li className="order_mobile_last">
              <Link
                href="https://www.colgate.edu/academics/departments-programs/department-music/music-groups/chamber-players"
                target="_blank"
                rel="noopener"
              >
                Colgate University Chamber Players | Hamilton, NY
              </Link>
            </li>
            <li>
              <Link
                href="https://www.vagelos.columbia.edu/education/student-resources/office-student-affairs/vp-s-club/clubs-and-organizations/arts-literature-and-entertainment-clubs/cuimc-symphony-orchestra"
                target="_blank"
                rel="noopener"
              >
                Columbia University Medical Center Orchestra | Manhattan, NY
              </Link>
            </li>
            <li className="order_mobile_last">OnStage, Inc. Pit Orchestra | Ramsey, NJ</li>
          </ul>
        </Reveal>

        <Reveal>
          <h2>Recordings</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4 }} />
              &nbsp;
              <Link href="/music/brahms.mp3">
                <i>Clarinet Quintet in B minor Op.115</i>, Brahms | Colgate University Chamber Players
              </Link>
            </li>
            <li className="order_mobile_last">
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4 }} />
              &nbsp;
              <Link href="/music/danzon.mp3">
                <i>Danzón</i>, Paquito D&apos;Rivera | Colgate University Chamber Players
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4 }} />
              &nbsp;
              <Link href="/music/bartok.mp3">
                <i>Contrasts, Sz.111</i>, Bartók | Colgate University Chamber Players
              </Link>
            </li>
            <li className="order_mobile_last">
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4 }} />
              &nbsp;
              <Link href="/music/gershwin.mp3">
                <i>Rhapsody in Blue</i>, Gershwin | Colgate University Orchestra
              </Link>
            </li>
          </ul>
        </Reveal>
      </main>
    </>
  );
}
