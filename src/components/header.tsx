import styles from './header.module.scss';
import { Source_Serif_4 } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const header_font = Source_Serif_4({ subsets: ['latin'] });

export default function Header() {
  return (
    <div className={`${styles.header} blue_raised_glossy`}>
      <div className={styles.header_group}>
        <Link href="/">
          <Image src="/monogram_white.png" width={40} height={40} alt="" priority={true} />
          <h1 className={header_font.className}>Matt Brauner</h1>
        </Link>
      </div>

      <div className={styles.header_group}>
        <Link href="/">Work</Link>|<Link href="/music">Music</Link>
      </div>
    </div>
  );
}
