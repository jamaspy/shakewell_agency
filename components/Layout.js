import Nav from "./Nav";
import SEO from "./SEO";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

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
