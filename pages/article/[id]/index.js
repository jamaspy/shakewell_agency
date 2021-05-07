import React from "react";
import Link from "next/link";
import { server } from "../../../config";
import { useRouter } from "next/router";
import { Layout, SEO } from "../../../components";
import articleStyles from "./styles.module.scss";
const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  const { data } = article;

  return (
    <Layout>
      <SEO title={data.title} description={data.excerpt} />
      <div className={articleStyles.article_container}>
        <Link href="/">
          <span className={articleStyles.article_button}>&larr;</span>
        </Link>
        <h1 className={articleStyles.main_article_title}>{data.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        ></p>
      </div>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/v1/posts/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/v1/posts/?per_page=100`);
  const articles = await res.json();
  const ids = articles.data.data.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
export default Article;
