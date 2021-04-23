import React from "react";
import Head from "next/head";
const SEO = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};
SEO.defaultProps = {
  title: "Shakewell Agency",
  keywords: "web development, programming, websites, applications",
  description: "Digital Agency making cool internet things",
};

export default SEO;
