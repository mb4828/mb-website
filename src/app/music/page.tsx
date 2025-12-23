'use client';

import styles from './page.module.scss';
import { useChat } from '@/components/chat-context';
import { Button, ButtonGroup } from '@mui/joy';
import { RiInstagramLine, RiMailLine } from '@remixicon/react';
import Parallax from '@/components/parallax';
import Reveal from '@/components/reveal';
import AudioPlayer from '@/components/audio-player';
import Link from 'next/link';

export default function MusicPage() {
  const { openChat } = useChat();

  return (
    <>
      <Parallax background="/matt_clarinet_background.jpg" foreground="/matt_clarinet_cutout.png" size="82%"></Parallax>

      <main className={styles.main}>
        <Reveal revealOnLoad>
          <p className="text-center text-lead">
            Matt is an amateur clarinetist and saxophonist with over 20 years of performance experience. He began
            studying clarinet at age 9 under the guidance of Scott Singer. Inspired by his grandfather,&nbsp;
            <Link href="https://en.wikipedia.org/wiki/Buzz_Brauner" target="_blank" rel="noopener">
              Buzz Brauner
            </Link>
            , a New York City studio musican and woodwind doubler, Matt added saxophone to his repertoire in high school
            in order to play in the pit orchestra for school musicals. He performs regularly with ensembles throughout
            New York City.
          </p>

          <ButtonGroup color="primary" variant="solid" size="lg" spacing={2} className="button-group">
            <Button
              component="a"
              href="https://instagram.com/matt.brauner/"
              target="_blank"
              rel="noopener"
              className="custom-mui-button"
            >
              <RiInstagramLine size={20} className="mr-4" />
              View Instagram
            </Button>
            <Button onClick={openChat} className="custom-mui-button">
              <RiMailLine size={20} className="mr-4" />
              Contact Matt
            </Button>
          </ButtonGroup>
        </Reveal>

        <Reveal>
          <h2>Instruments</h2>
          <ul>
            <li>
              Clarinets &mdash; B<span className={styles.flat}>♭</span>, E<span className={styles.flat}>♭</span>, A,
              Bass
            </li>
            <li>Saxophones &mdash; Soprano, Alto, Tenor</li>
          </ul>
        </Reveal>

        <Reveal>
          <h2>Ensembles Worked With</h2>
          <ul>
            <li>
              <Link href="https://www.centresymphony.com" target="_blank" rel="noopener">
                Centre Symphony Orchestra
              </Link>
            </li>

            <li>
              <Link
                href="https://www.vagelos.columbia.edu/education/student-resources/office-student-affairs/vp-s-club/clubs-and-organizations/arts-literature-and-entertainment-clubs/cuimc-symphony-orchestra"
                target="_blank"
                rel="noopener"
              >
                Columbia University Medical Center Orchestra
              </Link>
            </li>

            <li>
              <Link href="https://www.doctorsorchestra.org" target="_blank" rel="noopener">
                Doctors&apos; Orchestral Society of New York
              </Link>
            </li>

            <li>
              <Link href="https://jhorchestra.org/" target="_blank" rel="noopener">
                Jackson Heights Orchestra
              </Link>
            </li>

            <li>
              <Link href="https://manhattanwindensemble.com/" target="_blank" rel="noopener">
                Manhattan Wind Ensemble
              </Link>
            </li>

            <li>
              <Link href="https://manhattansummerwinds.org" target="_blank" rel="noopener">
                Manhattan Summer Winds
              </Link>
            </li>

            <li>
              <Link
                href="https://www.colgate.edu/academics/departments-programs/department-music/music-groups/university-orchestra"
                target="_blank"
                rel="noopener"
              >
                Colgate University Orchestra
              </Link>
            </li>

            <li>
              <Link
                href="https://www.colgate.edu/academics/departments-programs/department-music/music-groups/chamber-players"
                target="_blank"
                rel="noopener"
              >
                Colgate University Chamber Players
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal>
          <h2>Recordings</h2>
          <ul>
            <li>
              <AudioPlayer
                href="/music/brahms.mp3"
                title="Clarinet Quintet, Op.115, Brahms"
                subtitle="Colgate University Chamber Players"
              />
            </li>
            <li>
              <AudioPlayer
                href="/music/bartok.mp3"
                title="Contrasts, Sz.111, Bartók"
                subtitle="Colgate University Chamber Players"
              />
            </li>
            <li>
              <AudioPlayer
                href="/music/danzon.mp3"
                title="Danzón, Paquito D'Rivera"
                subtitle="Colgate University Chamber Players"
              />
            </li>
            <li>
              <AudioPlayer
                href="/music/marquez.mp3"
                title="Danzón No. 2, Arturo Márquez"
                subtitle="Manhattan Wind Ensemble"
              />
            </li>
            <li>
              <AudioPlayer
                href="/music/gershwin.mp3"
                title="Rhapsody in Blue, Gershwin"
                subtitle="Colgate University Orchestra"
              />
            </li>
          </ul>
        </Reveal>
      </main>
    </>
  );
}
