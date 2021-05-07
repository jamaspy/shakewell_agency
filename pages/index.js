import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { ArticleList, Layout } from "../components/";
import { server } from "../config";

export default function Home({ articles }) {
  const {
    data: { data },
  } = articles;

  return (
    <Layout>
      <div className={styles.logo_image}>
        <Image
          src="/images/logo.png"
          alt="Shakewell Logo"
          priority={true}
          quality={90}
          width={700}
          height={700}
        />
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
