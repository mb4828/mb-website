'use client';

import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import Parallax from '@/components/parallax';
import { useEffect, useState } from 'react';
import StackIcon from 'tech-stack-icons';
import Tooltip from '@mui/joy/Tooltip';
import { CertifiedIcon } from '@/components/certified-icon';

export default function WorkPage() {
  const BLK_LIGHT_SRC = '/blackrock.jpeg';
  const BLK_DARK_SRC = '/blackrock-dark.jpeg';
  const today = new Date();
  const yearsExp = today.getFullYear() - 2015;
  const [blkImageSrc, setBlkImageSrc] = useState(BLK_LIGHT_SRC);

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

  useEffect(() => {
    // Update the image based on dark mode preference
    const updateImageSrc = (e: any) => {
      if (e.matches) {
        setBlkImageSrc(BLK_DARK_SRC);
      } else {
        setBlkImageSrc(BLK_LIGHT_SRC);
      }
    };
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateImageSrc);

    // On load
    if (mediaQuery.matches) {
      setBlkImageSrc(BLK_DARK_SRC);
    }

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', updateImageSrc);
    };
  }, []);

  return (
    <>
      <Parallax background="/matt_headshot_background.jpeg" foreground="/matt_headshot_cutout.png"></Parallax>

      <main>
        <div className={styles.content_grid}>
          <Reveal className={styles.full_width} revealOnLoad>
            <p className="text-center">
              Matt is a New York City based technologist with {yearsExp} years of experience in tech leadership,
              full-stack web development, financial technology, and data analysis. With a Bachelor&apos;s Degree in
              Computer Science and Economics from Colgate University, he specializes in Python and Javascript but has
              experience with many programming languages and frameworks.
            </p>
          </Reveal>

          <div className={styles.flex_row}>
            <Reveal className={styles.half_width}>
              <h2>Work</h2>
              <div className={styles.img_wrap}>
                <Image src={blkImageSrc} alt="" width={75} height={75} />
                <p>
                  <strong>BlackRock</strong>
                  <br />
                  Vice President | Senior Software Engineer II
                  <br />
                  2015 &ndash; Present
                </p>
              </div>
            </Reveal>

            <Reveal className={styles.half_width}>
              <h2>Education</h2>
              <div className={styles.img_wrap}>
                <Image src="/colgate.jpg" alt="" width={75} height={75} />
                <p>
                  <strong>Colgate University</strong>
                  <br />
                  Bachelor of Arts | Computer Science & Economics
                  <br />
                  2011 &ndash; 2015
                </p>
              </div>
            </Reveal>
          </div>

          <div className={styles.flex_row}>
            <Reveal className={`${styles.third_width} ${styles.skills}`}>
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

            <Reveal className={`${styles.third_width} ${styles.certifications}`}>
              <h2>Certifications</h2>
              <ul>
                <li>
                  <CertifiedIcon />
                  <Link href="https://www.hackerrank.com/certificates/1d2bd2382beb" target="_blank" rel="noopener">
                    Software Engineering | HackerRank
                  </Link>
                </li>
                <li>
                  <CertifiedIcon />
                  <Link href="https://www.hackerrank.com/certificates/b8cd8a8e10b1" target="_blank" rel="noopener">
                    Frontend Development | HackerRank
                  </Link>
                </li>
                <li>
                  <CertifiedIcon />
                  <Link href="https://www.hackerrank.com/certificates/9f3f33080880" target="_blank" rel="noopener">
                    Python | HackerRank
                  </Link>
                </li>
              </ul>
            </Reveal>

            <Reveal className={`${styles.third_width} ${styles.resume}`}>
              <h2>Resume</h2>
              <Link href="/Matt Brauner Resume Web.pdf" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={faFilePdf} size="lg" style={{ marginRight: 4 }} />
                View Resume
              </Link>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
