'use client';

import styles from './page.module.scss';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import Parallax from '@/components/parallax';
import StackIcon from 'tech-stack-icons';
import Tooltip from '@mui/joy/Tooltip';
import { Button, ButtonGroup } from '@mui/joy';
import { useChat } from '@/components/chat-context';
import { RiLinkedinBoxLine, RiMailLine } from '@remixicon/react';
import { useEffect, useState } from 'react';

export default function WorkPage() {
  const { openChat } = useChat();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateDarkMode = () => setIsDarkMode(mediaQuery.matches);

    updateDarkMode();
    mediaQuery.addEventListener('change', updateDarkMode);

    return () => mediaQuery.removeEventListener('change', updateDarkMode);
  }, []);

  const today = new Date();
  const yearsExp = today.getFullYear() - 2015;
  const skills = [
    { name: 'python', label: 'Python' },
    { name: 'typescript', label: 'Typescript' },
    { name: 'java', label: 'Java' },
    { name: 'angular17', label: 'Angular' },
    { name: 'react', label: 'React' },
    { name: 'aws', label: 'AWS' },
    { name: 'azure', label: 'Azure' },
    { name: 'cloudflare', label: 'Cloudflare' },
    { name: 'kubernetes', label: 'Kubernetes' },
    { name: 'docker', label: 'Docker' },
    { name: 'cassandradb', label: 'Cassandra' },
    { name: 'postgresql', label: 'PostgreSQL' },
    { name: 'snowflake', label: 'Snowflake' },
    { name: 'pandas', label: 'Spark/Pandas' },
    { name: 'openai', label: 'OpenAI' },
    { name: 'bash', label: 'Bash' },
  ];

  return (
    <>
      <Parallax background="/matt_headshot_background.jpeg" foreground="/matt_headshot_cutout.png"></Parallax>

      <main>
        <div className={styles.content_grid}>
          <Reveal className={styles.full_width} revealOnLoad>
            <p className="text-center text-lead">
              Matt is a senior lead software engineer based in New York City with {yearsExp} years of experience in tech
              leadership, full-stack web development, financial technology, and data analysis. With a Bachelor&apos;s
              Degree in Computer Science and Economics from{' '}
              <Link href="https://colgate.edu" target="_blank" rel="noopener">
                Colgate University
              </Link>
              , he specializes in Python and Javascript but has experience with many programming languages and
              frameworks.
            </p>

            <ButtonGroup color="primary" variant="solid" size="lg" spacing={2} className="button-group">
              <Button
                component="a"
                href="https://linkedin.com/in/matt-brauner/"
                target="_blank"
                rel="noopener"
                className="custom-mui-button"
              >
                <RiLinkedinBoxLine size={20} className="mr-4" />
                View LinkedIn
              </Button>
              <Button onClick={openChat} className="custom-mui-button">
                <RiMailLine size={20} className="mr-4" />
                Contact Matt
              </Button>
            </ButtonGroup>
          </Reveal>

          <div className={styles.flex_row}>
            <Reveal className={`${styles.third_width} ${styles.skills}`}>
              <h2>Skills</h2>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.name} className={styles.skill_icon}>
                    <Tooltip title={skill.label} variant="plain" arrow>
                      <div>
                        <StackIcon name={skill.name} variant={isDarkMode ? 'dark' : 'light'} />
                      </div>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className={`${styles.third_width} ${styles.certifications}`}>
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

            <Reveal className={`${styles.third_width} ${styles.projects}`}>
              <h2>Projects</h2>
              <ul>
                <li>
                  <Tooltip title="React" variant="plain" arrow className={styles.skill_icon}>
                    <div>
                      <StackIcon name="react" variant={isDarkMode ? 'dark' : 'light'} />
                    </div>
                  </Tooltip>
                  <Link href="https://subway.mattbrauner.com" target="_blank" rel="noopener">
                    NYC subway map
                  </Link>
                  <span>
                    {' [ '}
                    <Link href="https://github.com/mb4828/mta-subway-map" target="_blank" rel="noopener">
                      GitHub
                    </Link>
                    {' ] '}
                  </span>
                </li>
                <li>
                  <Tooltip title="React" variant="plain" arrow className={styles.skill_icon}>
                    <div>
                      <StackIcon name="react" variant={isDarkMode ? 'dark' : 'light'} />
                    </div>
                  </Tooltip>
                  <Link href="https://flightlog.mattbrauner.com" target="_blank" rel="noopener">
                    My flight log
                  </Link>
                  <span>
                    {' [ '}
                    <Link href="https://github.com/mb4828/my-flight-log/tree/main/app" target="_blank" rel="noopener">
                      GitHub
                    </Link>
                    {' ]'}
                  </span>
                </li>
                <li>
                  <Tooltip title="Python" variant="plain" arrow className={styles.skill_icon}>
                    <div>
                      <StackIcon name="python" variant={isDarkMode ? 'dark' : 'light'} />
                    </div>
                  </Tooltip>
                  <Link href="https://github.com/mb4828/PGChess" target="_blank" rel="noopener">
                    PGChess App
                  </Link>
                </li>
                <li>
                  <Tooltip title="Python" variant="plain" arrow className={styles.skill_icon}>
                    <div>
                      <StackIcon name="python" variant={isDarkMode ? 'dark' : 'light'} />
                    </div>
                  </Tooltip>
                  <Link href="https://github.com/mb4828/pi-rgb-smart-clock" target="_blank" rel="noopener">
                    RGB smart clock
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
