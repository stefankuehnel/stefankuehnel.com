import { Divider } from '../Divider/Divider';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';

const Layout = (props) => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.col}>
        <Header />
        <Divider />
        <main className={styles.content}>{props.children}</main>
        <Divider />
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
