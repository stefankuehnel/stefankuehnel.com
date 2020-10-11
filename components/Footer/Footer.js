import styles from './Footer.module.css';

export function Footer() {
  let copyrightYear = new Date().getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {copyrightYear} Stefan Kühnel, All rights reserved.
        </p>
        <p className={styles.privacy}>
          <a
            className={styles.link}
            href="https://9bn.de/privacy?lang=en"
            target="_blank"
            rel="noopener noreferrer">
            Privacy
          </a>
        </p>
      </footer>
    </>
  );
}
