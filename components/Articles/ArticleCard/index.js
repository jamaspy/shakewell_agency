import React, { useState } from "react";
import Link from "next/link";
import { Heart, HeartOutline } from "../../Icons";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
const ArticleItem = ({ article }) => {
  const date = new Date(article.created_at);
  const display_date = date.toDateString();
  const [favourite, setFavourite] = useState(false);

  const mockTags = ["design", "frontend", "backend"];
  return (
    <>
      <div className={styles.card}>
        <div className={styles.content_wrapper}>
          <div className={styles.article_image}>
            <img src={require('../../../pages/images/logo.png?&webp&resize&size=100')} alt="Shakewell Logo" />
          </div>
          <Link href="/article/[id]" as={`/article/${article.id}`}>
            <div className={styles.article_content}>
              <h3 className={styles.article_title}>{article.title} &rarr;</h3>
              <p className={styles.article_date}>Published: {display_date}</p>
              <p className={styles.article_excerpt}>{article.excerpt}</p>
              <p className={styles.article_date}>
                Author: {article.author || "John Smith"}
              </p>
            </div>
          </Link>

          <div className={styles.article_tag_wrapper}>
            {mockTags &&
              mockTags.map((tag, index) => (
                <li key={uuidv4()} className={styles.article_tag}>
                  #{tag}
                </li>
              ))}
          </div>
        </div>
        <button
          className={styles.article_favourite}
          onClick={() => setFavourite(!favourite)}
        >
          {favourite ? <Heart /> : <HeartOutline />}
        </button>
      </div>
    </>
  );
};

export default ArticleItem;
