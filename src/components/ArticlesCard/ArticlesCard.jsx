const ArticlesCard = ({ allArticles }) => {
  return (
    <section className="articles-card-container grid p-2 sm:grid-cols-2 lg:grid-cols-4">
      {allArticles.map((article) => (
        <article key={article.article_id}>
          <img src={article.article_img_url} alt={article.title}></img>
          <h3 className="text-2xl font-bold">{article.title}</h3>
          <p>By: {article.author}</p>
          <p>Likes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </article>
      ))}
    </section>
  );
};

export default ArticlesCard;
