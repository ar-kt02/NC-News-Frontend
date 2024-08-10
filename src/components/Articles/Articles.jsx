import { fetchArticles } from "../../api";
import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TopicsContext } from "../../contexts/TopicsContext/TopicsContext";
import { updateQueryParams } from "../../utils/updateQueryParams";

import ArticlesCard from "../ArticlesCard/ArticlesCard";
import SortArticles from "../SortArticles/SortArticles";

import Loading from "../../pages/Loading";
import ArticleNotFound from "../../pages/ArticleNotFound.jsx";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allArticles, setAllArticles] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [countPages, setCountPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const page = Number(searchParams.get("p")) || 1;
  const sort = searchParams.get("sort_by") || undefined;
  const order = searchParams.get("order") || undefined;

  const { allTopics } = useContext(TopicsContext);

  const checkTopicExists = allTopics.find(
    (contextTopic) => contextTopic.slug === topic,
  );

  useEffect(() => {
    setIsLoading(true);

    fetchArticles(page, topic, sort, order)
      .then(({ articles, total_count }) => {
        setErrorMsg("");

        setCountPages(Math.ceil(total_count / 12));
        setAllArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMsg("Failed to fetch articles");

        const errMsg = err.response.data.msg;
        if (errMsg) {
          setErrorMsg(errMsg);
        }
      });
  }, [page, topic, sort, order]);

  const handleMoreArticles = (latestPage) => {
    const newParams = [
      ["p", latestPage > 1 ? latestPage : undefined],
      ["topic", topic ? topic : undefined],
    ];

    updateQueryParams(newParams, searchParams, setSearchParams);
  };

  const handleSortChange = (selectedSort) => {
    const newParams = [["sort_by", selectedSort]];

    updateQueryParams(newParams, searchParams, setSearchParams);
  };

  const handleOrderChange = (selectedOrder) => {
    const newParams = [["order", selectedOrder]];

    updateQueryParams(newParams, searchParams, setSearchParams);
  };

  if (isLoading) return <Loading />;
  if (
    errorMsg ||
    (allArticles !== null && !allArticles.length && !checkTopicExists)
  )
    return <ArticleNotFound errorMsg={errorMsg} />;

  return (
    <>
      <h2 className="ml-5 mt-3 text-5xl font-bold">
        {checkTopicExists ? checkTopicExists.slug : "Articles"}
      </h2>
      <p className="ml-5 mt-1 text-lg text-gray-600">
        {checkTopicExists && checkTopicExists.description}
      </p>
      <SortArticles
        order={order}
        sort={sort}
        handleSortChange={handleSortChange}
        handleOrderChange={handleOrderChange}
      />
      <ArticlesCard
        allArticles={allArticles}
        handleMoreArticles={handleMoreArticles}
        countPages={countPages}
        page={page}
      />
    </>
  );
};

export default Articles;
