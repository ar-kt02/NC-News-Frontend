const TopicsCard = ({ allTopics, handleTopicClick, isLoading, errorMsg }) => {
  return (
    <>
      <h3 className="text-md font-medium">Topics:</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        allTopics.map((topic, index) => (
          <p
            key={index}
            onClick={() => handleTopicClick(topic.slug)}
            className="cursor-pointer text-sm hover:underline"
          >
            {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
          </p>
        ))
      )}
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
};

export default TopicsCard;
