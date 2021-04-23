import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { ArticleList } from "../components/Articles";
import { server } from "../config";
import { Layout } from "../components";
export default function Home({ articles }) {
  console.log(articles);
  return (
    <Layout>
      <Image
        src="/images/logo.png"
        alt="Picture of the author"
        width={900}
        height={900}
      />
      <h1 className={styles.title}>A group of devs, making internet things</h1>
      <ArticleList articles={articles} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
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
