import { useState } from "react";
import Articles from "../Articles/Articles";
import { Routes, Route } from "react-router-dom";

const ArticlesContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allArticles, setAllArticles] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Articles
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            allArticles={allArticles}
            setAllArticles={setAllArticles}
          />
        }
      ></Route>
    </Routes>
  );
};

export default ArticlesContainer;
