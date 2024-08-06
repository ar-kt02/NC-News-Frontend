import { useEffect, useState } from "react";
import { fetchArticleById } from "../../api";
import { useParams } from "react-router-dom";
import { formatUKDate } from "../../utils/formatUKDate";

const Article = () => {
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(articleId)
      .then((response) => {
        setErrorMsg("");
        setArticle(response);
        setIsLoading(false);
      })
      .catch((err) => {
        const message = err.response.data.msg;
        setArticle(null);
        setIsLoading(false);
        setErrorMsg(message);
      });
  }, [articleId]);

  if (isLoading) return <p className="m-5 text-center">Loading...</p>;
  if (errorMsg) return <p className="m-5 text-center">{errorMsg}.</p>;

  return (
    <section className="p-3">
      {article && (
        <article className="max-w-5xl">
          <h3 className="mb-2 text-4xl font-bold">{article.title}</h3>
          <p className="text-xl">By {article.author}</p>
          <img
            src={article.article_img_url}
            alt="Article Image"
            className="mb-2 mt-2 h-auto w-full"
          />
          <p className="mb-2 text-gray-500">
            {formatUKDate(article.created_at)}
          </p>
          <p className="text-left text-2xl leading-8">{article.body}</p>
        </article>
      )}
    </section>
  );
};

export default Article;
