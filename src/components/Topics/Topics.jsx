import { useContext } from "react";
import { TopicsContext } from "../../contexts/TopicsContext/TopicsContext";
import { useNavigate } from "react-router-dom";
import TopicsCard from "../TopicsCard/TopicsCard";

const Topics = () => {
  const { allTopics, errorMsg, isLoading } = useContext(TopicsContext);
  const navigate = useNavigate();

  const handleTopicClick = (slug) => {
    navigate(`/articles?topic=${slug}`);
  };

  return (
    <TopicsCard
      allTopics={allTopics}
      handleTopicClick={handleTopicClick}
      isLoading={isLoading}
      errorMsg={errorMsg}
    />
  );
};

export default Topics;
