import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/AuthUserContext/AuthUserContext";
import { useParams } from "react-router-dom";
import { postComment } from "../../api";

const AddComment = ({ setArticleComments }) => {
  const { userInfo } = useContext(AuthUserContext);
  const { articleId } = useParams();
  const [newComment, setNewComment] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment) {
      setErrorMsg("");
      setIsAdding(true);

      postComment(articleId, userInfo.username, newComment)
        .then((response) => {
          setArticleComments((priorComments) => [response, ...priorComments]);
          setNewComment("");
          setIsAdding(false);
        })
        .catch((err) => {
          setErrorMsg("Failed to post comment. Try again letter");
          setIsAdding(false);

          const errMessage = `${err.response.data.msg}.`;
          if (errMessage) {
            setErrorMsg(errMessage);
          }
        });
    }
  };

  const handleCommentInput = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <>
      {!userInfo ? (
        <p className="mb-2">You must be logged in to comment.</p>
      ) : (
        <form className="relative" onSubmit={handleCommentSubmit}>
          <img
            src={userInfo.avatar_url}
            className="absolute bottom-4 left-3 mb-1 mr-1 inline h-10 w-10 rounded-full border"
          />
          <p className="absolute bottom-7 left-14 inline font-medium">
            {userInfo.name}
          </p>
          <textarea
            rows="4"
            placeholder="Add a comment..."
            className="w-full resize-none rounded-md border p-7"
            value={newComment}
            onChange={handleCommentInput}
          ></textarea>
          <button
            type="submit"
            className={`${isAdding && "cursor-not-allowed opacity-35"} absolute bottom-4 right-2 rounded-md bg-red-600 p-2 text-white`}
            disabled={isAdding}
          >
            {isAdding ? "Posting..." : "Post comment"}
          </button>
        </form>
      )}
      {errorMsg && <p className="mb-2 text-right text-red-600">{errorMsg}</p>}
    </>
  );
};

export default AddComment;
