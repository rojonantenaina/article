import axios from "axios";
import { IArticle } from "../types/article";

export const getAllArticles = async () => {
  const response = await axios.get<IArticle[]>(
    "http://localhost:3001/articles"
  );
  return response;
};
