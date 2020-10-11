import Link from 'next/link';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <h1 className={styles.name}>{' Stefan Kühnel '}</h1>
        <span className={styles.description}>
          {' Co-Founder & General Director of GloomBerry '}
        </span>
      </div>
      <Link href="/">
        <a>
          <img
            className={styles.avatar}
            alt="Stefan Kühnel"
            src="https://assets-cdn.stefankuehnel.com/images/modules/site/profile-image.webp"
            width="50"
            height="50"></img>
        </a>
      </Link>
    </header>
  );
}
