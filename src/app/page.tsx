'use client';

import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import Parallax from '@/components/parallax';
import StackIcon from 'tech-stack-icons';
import Tooltip from '@mui/joy/Tooltip';

export default function WorkPage() {
  const today = new Date();
  const yearsExp = today.getFullYear() - 2015;
  const skills = [
    { name: 'js', label: 'Javascript' },
    { name: 'typescript', label: 'Typescript' },
    { name: 'jquery', label: 'jQuery' },
    { name: 'html5', label: 'HTML5' },
    { name: 'css3', label: 'CSS3' },
    { name: 'angular17', label: 'Angular' },
    { name: 'reactjs', label: 'React' },
    { name: 'python', label: 'Python' },
    { name: 'django', label: 'Django' },
    { name: 'java', label: 'Java' },
    { name: 'docker', label: 'Docker' },
    { name: 'wordpress', label: 'Wordpress' },
    { name: 'mysql', label: 'MySQL' },
    { name: 'cassandradb', label: 'Cassandra' },
    { name: 'bash', label: 'Bash' },
    { name: 'git', label: 'Git' },
  ];

  return (
    <>
      <Parallax background="/matt_headshot_background.jpeg" foreground="/matt_headshot_cutout.png"></Parallax>

      <main>
        <div className={styles.content_grid}>
          <Reveal className={styles.full_width} revealOnLoad>
            <p className="text-center">
              Matt is a Senior Software Engineer based in New York City with {yearsExp} years of experience in tech
              leadership, full-stack web development, financial technology, and data analysis. With a Bachelor&apos;s
              Degree in Computer Science and Economics from{' '}
              <Link href="https://colgate.edu" target="_blank" rel="noopener">
                Colgate University
              </Link>
              , he specializes in Python and Javascript but has experience with many programming languages and
              frameworks.
            </p>
          </Reveal>

          <div className={styles.flex_row}>
            <Reveal className={`${styles.half_width} ${styles.projects}`}>
              <h2>Projects</h2>
              <ul>
                <li>
                  <Link href="https://mb4828.github.io/mta-subway-map/" target="_blank" rel="noopener">
                    NYC subway map
                  </Link>
                  {' [ '}
                  <Link href="https://github.com/mb4828/mta-subway-map" target="_blank" rel="noopener">
                    GitHub
                  </Link>
                  {' ]'}
                </li>
                <li>
                  <Link href="https://logbook.mattbrauner.com" target="_blank" rel="noopener">
                    Interactive flight logbook
                  </Link>
                  {' [ '}
                  <Link href="https://github.com/mb4828/my-flight-log" target="_blank" rel="noopener">
                    GitHub
                  </Link>
                  {' ]'}
                </li>
                <li>
                  <Link href="https://github.com/mb4828/pi-rgb-smart-clock" target="_blank" rel="noopener">
                    Python RGB smart clock
                  </Link>
                </li>
              </ul>
            </Reveal>

            <Reveal className={`${styles.half_width} ${styles.certifications}`}>
              <h2>Certifications</h2>
              <ul>
                <li>
                  <Link href="https://www.hackerrank.com/certificates/1d2bd2382beb" target="_blank" rel="noopener">
                    Software Engineering | HackerRank
                  </Link>
                </li>
                <li>
                  <Link href="https://www.hackerrank.com/certificates/b8cd8a8e10b1" target="_blank" rel="noopener">
                    Frontend Development | HackerRank
                  </Link>
                </li>
                <li>
                  <Link href="https://www.hackerrank.com/certificates/9f3f33080880" target="_blank" rel="noopener">
                    Python | HackerRank
                  </Link>
                </li>
              </ul>
            </Reveal>

            <Reveal className={`${styles.half_width} ${styles.skills}`}>
              <h2>Skills</h2>
              <ul>
                {skills
                  .sort((a, b) => (a.label < b.label ? -1 : 1))
                  .map((skill) => (
                    <li key={skill.name}>
                      <Tooltip title={skill.label} variant="plain" arrow>
                        <div>
                          <StackIcon name={skill.name} />
                        </div>
                      </Tooltip>
                    </li>
                  ))}
              </ul>
            </Reveal>

            <Reveal className={`${styles.half_width} ${styles.resume}`}>
              <h2>Resume</h2>
              <Link href="/Matt Brauner Resume Web.pdf" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={faFilePdf} className="mr-4" />
                View Resume
              </Link>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
