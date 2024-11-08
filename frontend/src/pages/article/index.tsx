import { useEffect, useState } from "react";
import { getAllArticles } from "../../service/ArticleService";
import { IArticle } from "../../types/article";
import { Article } from "../../components/articleComponents/Article";

export const ArticlePage = () => {
  const [articles, setArticles] = useState<Array<IArticle>>([]);

  useEffect(() => {
    getAllArticles().then((res) => {
      if (res.data.length) {
        setArticles([...res.data]);
      } else setArticles([]);
    });
  }, []);

  return <Article articles={articles ?? []} />;
};
