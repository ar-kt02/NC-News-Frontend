import { useEffect, useState } from "react";
import { fetchArticleById } from "../../api";
import { useParams } from "react-router-dom";
import { formatUKDate } from "../../utils/formatUKDate";
import Comments from "../Comments/Comments";
import VoteArticle from "../VoteArticle/VoteArticle";

import ArticleNotFound from "../../pages/ArticleNotFound";
import Loading from "../../pages/Loading";

const Article = () => {
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [voteErrorMsg, setVoteErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(articleId)
      .then((response) => {
        setErrorMsg("");
        setArticle(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setArticle(null);
        setIsLoading(false);
        setErrorMsg("Failed to fetch article");

        const errorMsg = err.response.data.msg;
        if (errorMsg) {
          setErrorMsg(errorMsg);
        }
      });
  }, [articleId]);

  if (isLoading) return <Loading />;
  if (errorMsg) return <ArticleNotFound errorMsg={errorMsg} />;

  return (
    <section className="flex justify-center p-3">
      {article && (
        <article className="max-w-5xl">
          <p className="mb-2 text-gray-500">
            {formatUKDate(article.created_at)}
          </p>
          <h3 className="mb-2 text-4xl font-bold">{article.title}</h3>
          <p className="text-xl">By {article.author}</p>
          <img
            src={article.article_img_url}
            alt="Article Image"
            className="mb-2 mt-2 h-auto w-full"
          />
          <div className="mb-1 flex items-center space-x-1">
            <VoteArticle
              articleId={article.article_id}
              votes={article.votes}
              setVoteErrorMsg={setVoteErrorMsg}
            />
            <p>
              people {article.votes >= 0 ? "liked" : "disliked"} this article.
            </p>
          </div>
          <p className="mb-1 text-red-700">{voteErrorMsg}</p>
          <p className="text-left text-xl leading-7">{article.body}</p>
          <Comments />
        </article>
      )}
    </section>
  );
};

export default Article;
