import React from "react";
import { Layout } from "../components";
import styles from "../styles/contact.module.scss";
const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
          <img src={require('./images/logo.png?&webp&resize&size=300')} alt="Shakewell Logo" />
        <h1>Contact</h1>
      </div>
    </Layout>
  );
};

export default Contact;
