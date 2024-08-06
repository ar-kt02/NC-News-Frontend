import ArticlesCard from "../ArticlesCard/ArticlesCard";
import { fetchArticles } from "../../api";
import { useEffect, useState } from "react";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allArticles, setAllArticles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then((response) => {
        setErrorMsg("");
        setAllArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setAllArticles([]);
        setIsLoading(false);
        const statusCode = err.response.status;
        if (statusCode === 404)
          setErrorMsg("Failed to fetch articles. Try again later.");
      });
  }, []);

  if (errorMsg) return <p className="m-5 text-center">{errorMsg}</p>;
  if (isLoading) return <p className="m-5 text-center">Loading...</p>;

  return <ArticlesCard allArticles={allArticles} />;
};

export default Articles;
