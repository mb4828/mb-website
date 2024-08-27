'use client';

import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import Parallax from '@/components/parallax';

export default function WorkPage() {
  const today = new Date();
  const yearsExp = today.getFullYear() - 2015;

  return (
    <>
      <Parallax background="/nyc_background.png" foreground="/matt_cutout.png"></Parallax>

      <main className={styles.main}>
        <div className={styles.content_grid}>
          <Reveal className={styles.full_width} revealOnLoad>
            <p className="text-center">
              Matt is a New York City based technologist with {yearsExp} years of professional experience in full-stack
              web development, financial technology, and data analysis. He has a Bachelor&apos;s Degree in Computer
              Science and Economics from Colgate University. Matt specializes in Python and Javascript, but has
              experience with many programming languages and frameworks.
            </p>
          </Reveal>

          <div className={styles.flex_row}>
            <Reveal className={styles.half_width}>
              <h2>Work</h2>
              <div className={styles.img_wrap}>
                <Image src="/blackrock.jpeg" alt="" width={75} height={75} />
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

          <Reveal className={styles.full_width}>
            <h2>Skills</h2>
            <ul>
              <li>Programming &mdash; Javascript / Typescript, Python, Java</li>
              <li>Data Analysis &mdash; Jupyter, Power BI, Pandas, Spark, SQL</li>
              <li>Frameworks &mdash; Angular, React, jQuery, Django, Node.js</li>
              <li>Miscellaneous &mdash; Unix, Git, Nx</li>
            </ul>
          </Reveal>

          <Reveal className={styles.full_width}>
            <h2>Certifications</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faAward} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
                &nbsp;
                <Link href="https://www.hackerrank.com/certificates/1d2bd2382beb" target="_blank" rel="noopener">
                  Software Engineering | HackerRank
                </Link>
              </li>
              <li className="order_mobile_last">
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
                  Front-End Development | LinkedIn
                </Link>
              </li>
              <li className="order_mobile_last">
                <FontAwesomeIcon icon={faAward} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
                &nbsp;
                <Link href="https://www.linkedin.com/in/matt-brauner/details/skills/" target="_blank" rel="noopener">
                  Python | LinkedIn
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </main>
    </>
  );
}
