import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { ArticleList } from "../components/Articles";
import { server } from "../config";
import { Layout } from "../components";
export default function Home({ articles }) {
  console.log("TESTY#2", articles.data.data);
  const {
    data: { data },
  } = articles;
  return (
    <Layout>
      <Image
        src="/images/logo.png"
        alt="Shakewell Logo"
        width={900}
        height={900}
      />
      <h1 className={styles.title}>A group of devs, making internet things</h1>
      <ArticleList articles={data} />
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
