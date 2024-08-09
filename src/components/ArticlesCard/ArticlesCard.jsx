import { Link } from "react-router-dom";
import { formatUKDate } from "../../utils/formatUKDate";
import CommentsIcon from "../../public/comments.svg?react";
import VoteArticle from "../VoteArticle/VoteArticle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const ArticlesCard = ({
  allArticles,
  errorMsg,
  handleMoreArticles,
  countPages,
  page,
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
              <div className="mb-2 mr-2 mt-auto flex justify-end">
                <Link
                  to={`/articles/${article.article_id}`}
                  className="cursor-pointer rounded-lg border bg-black px-4 py-2 text-white hover:bg-gray-700"
                >
                  Read more <ReadMoreIcon fontSize="medium" />
                </Link>
              </div>
            </article>
          ))}
      </section>
      <div className="mb-5 flex justify-center">
        <button
          className={`m-1 flex items-center gap-2 rounded-lg border px-4 py-2 text-black hover:bg-[#f1f1f1] ${page === 1 ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={() => handleMoreArticles(page - 1)}
          disabled={page === 1}
        >
          <ArrowBackIcon fontSize="medium" />
          Previous
        </button>
        <button
          className={`m-1 flex items-center gap-2 rounded-lg border px-4 py-2 text-black hover:bg-[#f1f1f1] ${page >= countPages ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={() => handleMoreArticles(page + 1)}
          disabled={page >= countPages}
        >
          Next
          <ArrowForwardIcon fontSize="medium" />
        </button>
      </div>
    </>
  );
};

export default ArticlesCard;
