import React from "react";
import styles from "../styles/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Created By{" "}
      <img
        src="/images/black_logo.png"
        alt="Shakewell Logo"
        className={styles.logo}
      />{" "}
      Shakewell Agency
    </footer>
  );
};

export default Footer;
