const SortArticles = ({ order, sort, handleSortChange, handleOrderChange }) => {
  return (
    <div className="ml-5 mt-3 flex space-x-3">
      <div className="flex items-center space-x-1">
        <label htmlFor="sort_by">Sort by:</label>
        <select
          className="rounded-md border p-1"
          id="sort_by"
          value={sort}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Select</option>
          <option value="created_at">Date Published</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
          <option value="topic">Topic</option>
        </select>
      </div>

      <div className="flex items-center space-x-1">
        <label htmlFor="order">Order:</label>
        <select
          id="order"
          value={order}
          onChange={(e) => handleOrderChange(e.target.value)}
          className="rounded-md border p-1"
        >
          <option value="">Select</option>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
};

export default SortArticles;
