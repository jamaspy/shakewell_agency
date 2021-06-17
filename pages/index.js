import styles from "../styles/Home.module.scss";
import { ArticleList, Layout } from "../components/";
import { server } from "../config";
import React from 'react';

export default function Home({ articles }) {
  const {
    data: { data },
  } = articles;

  return (
    <Layout>
      <div className={styles.logo_image}>
        <img src={require('./images/logo.png?&webp&resize&size=700')} alt="Shakewell Logo" />
      </div>
      <h1 className={styles.title}>A group of devs, making internet things</h1>
      <div className={styles.wrapper}>
        <ArticleList articles={data} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/v1/posts/?per_page=100`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
