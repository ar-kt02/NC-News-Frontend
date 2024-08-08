import { Link } from "react-router-dom";
import { formatUKDate } from "../../utils/formatUKDate";
import CommentsIcon from "../../public/comments.svg?react";
import VoteArticle from "../VoteArticle/VoteArticle";

const ArticlesCard = ({
  allArticles,
  moreArticles,
  handleMoreArticles,
  errorMsg,
}) => {
  return (
    <>
      <section className="flex grid p-2 sm:grid-cols-2 lg:grid-cols-4">
        {allArticles &&
          allArticles.map((article) => (
            <article
              key={article.article_id}
              className="m-3 flex flex-col rounded-xl shadow-md"
            >
              <img
                src={article.article_img_url}
                alt={article.title}
                className="rounded-t-md"
              />
              <p className="m-2">{formatUKDate(article.created_at)}</p>
              <h3 className="ml-2 text-2xl font-bold">{article.title}</h3>
              <p className="ml-2">{article.author}</p>
              <div className="m-2 flex items-center space-x-1.5">
                <VoteArticle
                  articleId={article.article_id}
                  votes={article.votes}
                />
                <CommentsIcon className="mr-1 inline h-5 w-5 cursor-pointer" />
                <p>{article.comment_count} comments</p>
              </div>
              <p className="ml-2">#{article.topic}</p>
              <Link
                to={`/articles/${article.article_id}`}
                className="mb-1 mr-2 mt-auto cursor-pointer text-right"
              >
                Read more...
              </Link>
            </article>
          ))}
      </section>
      <div className="mb-5 flex justify-center">
        {moreArticles ? (
          <button
            onClick={handleMoreArticles}
            className="rounded bg-gray-700 p-2 text-white hover:bg-sky-700"
          >
            More Articles
          </button>
        ) : (
          <p className="text-md">No more articles to show.</p>
        )}
        {errorMsg && <p className="text-center text-red-600">{errorMsg}</p>}
      </div>
    </>
  );
};

export default ArticlesCard;
