import ArticlesCard from "../ArticlesCard/ArticlesCard";
import { fetchArticles } from "../../api";
import { useEffect } from "react";

const Articles = ({ isLoading, setIsLoading, allArticles, setAllArticles }) => {
  useEffect(() => {
    fetchArticles().then((response) => {
      setAllArticles(response);
    });
  }, [setAllArticles]);

  return <ArticlesCard allArticles={allArticles} />;
};

export default Articles;
