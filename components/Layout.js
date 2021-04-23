import Nav from "./Nav";
import SEO from "./SEO";
// import Header from "./Header";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
