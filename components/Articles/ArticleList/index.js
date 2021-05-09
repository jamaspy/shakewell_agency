import React from "react";
import ArticleItem from "../ArticleCard";
import articleStyles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
// import { articles } from "../../data";
const ArticleList = ({ articles }) => {
  console.log(articles);
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={uuidv4()} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
