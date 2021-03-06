import React from "react";
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Created By{" "}
      <img
        src={require('../../pages/images/black_logo.png')}
        alt="Shakewell Logo"
        className={styles.logo}
      />{" "}
      Shakewell Agency
    </footer>
  );
};

export default Footer;
