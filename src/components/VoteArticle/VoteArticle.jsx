import { useState } from "react";
import DownvoteIcon from "../../public/downvote.svg?react";
import UpvoteIcon from "../../public/upvote.svg?react";
import { updateVotesArticle } from "../../api";

const VoteArticle = ({ articleId, votes, setVoteErrorMsg }) => {
  const [updateVotes, setUpdateVotes] = useState(votes);
  const [errorColour, setErrorColour] = useState(false);
  const [successColour, setSuccessColour] = useState(false);
  const [voteClicked, setVoteClicked] = useState("");

  const articleVoteError = (errorMsg) => {
    if (setVoteErrorMsg) {
      setVoteErrorMsg(errorMsg);
    }
  };

  const handleVoteClick = (incVotes, voteType) => {
    setUpdateVotes((priorVotes) => priorVotes + incVotes);

    articleVoteError("");

    setErrorColour(false);
    setSuccessColour(false);

    updateVotesArticle(articleId, incVotes)
      .then((response) => {
        setUpdateVotes(response.votes);
        articleVoteError("");

        setSuccessColour(true);
        setVoteClicked(voteType);
      })
      .catch((err) => {
        setUpdateVotes((priorVotes) => priorVotes - incVotes);
        articleVoteError("Failed to add vote. Try again later.");

        setErrorColour(true);
        setVoteClicked(voteType);
      });
  };

  const fillColour = (voteType) => {
    if (voteClicked === voteType) {
      return errorColour ? "red" : successColour ? "green" : "";
    }
  };

  const upClick = "up";
  const downClick = "down";

  return (
    <>
      <UpvoteIcon
        style={{
          fill: fillColour(upClick),
        }}
        className="h-5 w-5 cursor-pointer hover:fill-green-500"
        onClick={() => handleVoteClick(1, upClick)}
      />
      <DownvoteIcon
        style={{
          fill: fillColour(downClick),
        }}
        className="h-5 w-5 cursor-pointer hover:fill-green-500"
        onClick={() => handleVoteClick(-1, downClick)}
      />
      <p>{updateVotes}</p>
    </>
  );
};

export default VoteArticle;
