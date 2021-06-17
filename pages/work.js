import React from "react";
import { Layout } from "../components";
import styles from "../styles/work.module.scss";

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
        </div>
      </div>
    </Layout>
  );
};

export default Work;
