import React from "react";
import { Layout } from "../components";
import Image from "next/image";
import styles from "../styles/contact.module.scss";
const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          src="/images/logo.png"
          alt="Shakewell Logo"
          priority={true}
          quality={90}
          width={300}
          height={300}
        />
        <h1>Contact</h1>
      </div>
    </Layout>
  );
};

export default Contact;
