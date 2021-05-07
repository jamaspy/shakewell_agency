import { Footer, Nav, SEO } from "../";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <SEO />
      <Nav />
      <section className={styles.children}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
