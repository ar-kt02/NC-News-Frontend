import { fetchTopics } from "../../api";
import { createContext, useState, useEffect } from "react";

export const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
  const [allTopics, setAllTopics] = useState([]);
  const [errorMsg, setErroMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTopics()
      .then((response) => {
        setAllTopics(response);
        setErroMsg("");
      })
      .catch((err) => {
        setErroMsg("Failed to load topics.");

        const errorMsg = err.response.data.msg;
        if (errorMsg) {
          setErroMsg(errorMsg);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <TopicsContext.Provider value={{ allTopics, errorMsg, isLoading }}>
      {children}
    </TopicsContext.Provider>
  );
};
