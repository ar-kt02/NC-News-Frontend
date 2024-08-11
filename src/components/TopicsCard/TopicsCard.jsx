import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useRef } from "react";

const TopicsCard = ({ allTopics, handleTopicClick, isLoading, errorMsg }) => {
  const scrollByRef = useRef(null);

  const handleScroll = (direction) => {
    scrollByRef.current?.scrollBy({
      left: direction === "left" ? -110 : 110,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex items-center">
      <h3 className="text-md ml-2 mr-1 font-light">Topics:</h3>
      <NavigateBeforeIcon
        fontSize="medium"
        className="cursor-pointer"
        onClick={() => handleScroll("left")}
      />
      <div
        ref={scrollByRef}
        className="hide-scrollbar flex max-w-[35vw] items-center gap-3 overflow-x-auto rounded-full py-1"
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          allTopics.map((topic, index) => (
            <p
              key={index}
              onClick={() => handleTopicClick(topic.slug)}
              className="cursor-pointer text-sm font-medium hover:text-blue-800 hover:underline"
            >
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </p>
          ))
        )}
        {errorMsg && <p>{errorMsg}</p>}
      </div>
      <NavigateNextIcon
        fontSize="medium"
        className="cursor-pointer"
        onClick={() => handleScroll("right")}
      />
    </section>
  );
};

export default TopicsCard;
