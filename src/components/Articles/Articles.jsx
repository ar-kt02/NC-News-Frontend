import { fetchArticles } from "../../api";
import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TopicsContext } from "../../contexts/TopicsContext/TopicsContext";

import ArticlesCard from "../ArticlesCard/ArticlesCard";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allArticles, setAllArticles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moreArticles, setMoreArticles] = useState(false);

  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const { allTopics } = useContext(TopicsContext);

  const checkTopicExists = allTopics.find(
    (contextTopic) => contextTopic.slug === topic,
  );

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(currentPage, topic)
      .then((response) => {
        setMoreArticles(true);
        setErrorMsg("");
        if (response.length < 10) setMoreArticles(false);

        setAllArticles((priorArticles) => [...priorArticles, ...response]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        setErrorMsg("Failed to fetch articles. Try again later.");

        const errMsg = err.response.data.msg;
        if (errMsg) {
          setErrorMsg(errMsg);
        }
      });
  }, [currentPage]);

  const handleMoreArticles = () => {
    if (moreArticles) {
      setCurrentPage((priorPage) => priorPage + 1);
    }
  };

  if (isLoading && !allArticles.length)
    return <p className="m-5 text-center">Loading...</p>;

  return (
    <>
      <h2 className="ml-5 mt-3 text-5xl font-bold">
        {checkTopicExists ? checkTopicExists.slug : "Articles"}
      </h2>
      <p className="ml-5 mt-1 text-lg text-gray-600">
        {checkTopicExists && checkTopicExists.description}
      </p>
      <ArticlesCard
        allArticles={allArticles}
        moreArticles={moreArticles}
        handleMoreArticles={handleMoreArticles}
        errorMsg={errorMsg}
      />
    </>
  );
};

export default Articles;
