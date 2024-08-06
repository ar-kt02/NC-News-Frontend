import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsById } from "../../api";
import { formatUKDate } from "../../utils/formatUKDate";
import UpvoteIcon from "../../public/upvote.svg?react";
import DownvoteIcon from "../../public/downvote.svg?react";

const Comments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [articleComments, setArticleComments] = useState([]);
  const { articleId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsById(articleId)
      .then((response) => {
        setErrorMsg("");
        setIsLoading(false);

        setArticleComments(response);
      })
      .catch((err) => {
        setIsLoading(false);
        setArticleComments([]);
        setErrorMsg("Failed to fetch comments.");
      });
  }, [articleId]);

  if (isLoading) return <p className="m-5 text-center">Loading comments...</p>;
  if (errorMsg) return <p className="m-5 text-center">{errorMsg}.</p>;

  return (
    <section className="mt-5">
      <p className="mb-2 text-xl">Comments: </p>
      {articleComments.length === 0 ? (
        <p>Be the first to comment.</p>
      ) : (
        <div className="max-h-96 overflow-y-auto rounded-md border">
          {articleComments.map((comment) => (
            <article
              className="m-2 mb-3 border-b-2 border-l-2 p-2"
              key={comment.comment_id}
            >
              <p className="inline font-bold">{comment.author}</p>
              <p className="inline"> • </p>
              <p className="inline">{formatUKDate(comment.created_at)}</p>
              <p>{comment.body}</p>
              <UpvoteIcon className="mr-1 inline h-5 w-5 cursor-pointer align-middle" />
              <p className="inline align-middle">{comment.votes}</p>
              <DownvoteIcon className="ml-1 inline h-5 w-5 cursor-pointer align-middle" />
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Comments;
