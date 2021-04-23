import React from "react";
import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created By{" "}
        <img
          src="images/black_logo.png"
          alt="Vercel Logo"
          className={styles.logo}
        />{" "}
        Shakewell Agency
      </a>
    </footer>
  );
};

export default Footer;
