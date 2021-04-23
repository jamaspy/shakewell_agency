import React, { useEffect, useState } from "react";
import Link from "next/link";
import { server } from "../../../config";
import { useRouter } from "next/router";
import { Layout, SEO } from "../../../components";
const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const [img, setImg] = useState("");
  useEffect(() => {
    const source = async () => {
      const res = await fetch("https://source.unsplash.com/random");
      const source = await res;
      console.log(source.url);
      setImg(source.url);
    };
    source();
  }, []);
  return (
    <Layout>
      <SEO title={article.title} description={article.excerpt} />
      <img
        src={img}
        alt="randomn_image"
        style={{ maxHeight: 500, width: "100%" }}
      />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Home</Link>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
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
