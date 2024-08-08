const TopicsCard = ({ allTopics, handleTopicClick, isLoading, errorMsg }) => {
  return (
    <>
      <h3 className="text-xl font-semibold">Topics:</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        allTopics.map((topic, index) => (
          <p
            key={index}
            onClick={() => handleTopicClick(topic.slug)}
            className="cursor-pointer hover:underline"
          >
            {topic.slug}
          </p>
        ))
      )}
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
};

export default TopicsCard;
