import React from "react";
import { Layout } from "../components";
import styles from "../styles/work.module.scss";
import Image from "next/image";

export const clients = [
  "Riptide",
  "DapperDeisgn",
  "RevelWell",
  "KloudPartners",
  "Preacta",
];
const Work = () => {
  return (
    <Layout>
      <div className={styles.parent}>
        <div className={styles.left}>
          {clients.map((client, index) => (
            <div key={index} className={styles.client_box}>
              {client}
            </div>
          ))}
        </div>
        <div className={styles.main}>
          <Image
            src="/images/logo.png"
            alt="Shakewell Logo"
            priority={true}
            quality={90}
            width={300}
            height={300}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Work;
