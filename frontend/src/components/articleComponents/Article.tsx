import React from "react";
import { IArticle } from "../../types/article";
import { Button } from "@mui/material";

interface IArticleProps {
  articles: Array<IArticle>;
}

export const Article: React.FC<IArticleProps> = ({ articles }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 2, width: 200 }}
    >
      {!!articles &&
        articles.map((article) => (
          <Button variant="outlined" key={article.id_article}>
            {article.nom_article}
          </Button>
        ))}
    </div>
  );
};
