import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-id0p.onrender.com/api",
});

export const fetchArticles = (page, topic) => {
  const params = { p: page, topic };
  return api.get("/articles", { params }).then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data: { article } }) => {
    return article;
  });
};

export const fetchCommentsById = (articleId) => {
  return api
    .get(`/articles/${articleId}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const updateVotesArticle = (articleId, incVotes) => {
  return api
    .patch(`/articles/${articleId}`, { inc_votes: incVotes })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchUser = (username) => {
  return api.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const postComment = (articleId, username, newComment) => {
  return api
    .post(`/articles/${articleId}/comments`, {
      username: username,
      body: newComment,
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = (commentId) => {
  return api.delete(`/comments/${commentId}`);
};

export const fetchTopics = () => {
  return api.get(`/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};
