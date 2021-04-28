import React from "react";
import Link from "next/link";
import { server } from "../../../config";
import { useRouter } from "next/router";
import { Layout, SEO } from "../../../components";
import articleStyles from "../../../styles/Article.module.css";
const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  console.log(article.data);
  const { data } = article;
  return (
    <Layout>
      <SEO title={data.title} description={data.excerpt} />
      <div className={articleStyles.article_container}>
        <h1>{data.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        ></p>
      </div>
      <Link href="/">
        <span className={articleStyles.article_button}>&larr; Home</span>
      </Link>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/v1/posts/${context.params.id}`);
  const article = await res.json();
  console.log("TEST JAMES NOWY", article);
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
