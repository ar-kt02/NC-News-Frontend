import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-id0p.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data: { article } }) => {
    return article;
  });
};
