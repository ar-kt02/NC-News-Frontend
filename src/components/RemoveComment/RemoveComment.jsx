import { useContext, useState } from "react";
import { AuthUserContext } from "../../contexts/AuthUserContext/AuthUserContext";
import { deleteComment } from "../../api";
import ClearIcon from "@mui/icons-material/Clear";

const RemoveComment = ({ userName, commentId, setArticleComments }) => {
  const { userInfo } = useContext(AuthUserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDeleteClick = () => {
    setErrorMsg("");

    if (commentId && userInfo.username === userName) {
      setIsDeleting(true);

      deleteComment(commentId)
        .then(() => {
          setArticleComments((priorComments) => {
            return priorComments.filter(
              (comment) => comment.comment_id !== commentId,
            );
          });

          setIsDeleting(false);
        })
        .catch((err) => {
          setIsDeleting(false);
          setErrorMsg("Failed to remove comment. Try again later.");

          const errorMsg = err.response.data.msg;
          if (errorMsg) {
            setErrorMsg(errorMsg);
          }
        });
    } else {
      setIsDeleting(false);
      setErrorMsg("You cannot delete this comment.");
    }
  };

  return (
    <>
      <div className="flex space-x-3">
        {errorMsg && <p className="text-red-600">{errorMsg}</p>}
        {userInfo && userInfo.username === userName && (
          <button
            type="button"
            className={`${isDeleting ? "cursor-not-allowed opacity-35" : "hover:opacity-80"} text-[#172554]`}
            onClick={handleDeleteClick}
            disabled={isDeleting}
          >
            <ClearIcon fontSize="small" />
          </button>
        )}
      </div>
    </>
  );
};

export default RemoveComment;
