const connection = require("../db/connection");

exports.fetchCommentsByArticleId = (article_id) => {
  return connection
    .query(
      `SELECT * 
      FROM comments
      WHERE article_id = $1`,
      [article_id]
    )
    .then((result) => {
      if (result.rowCount === 0) {
        return Promise.reject({
          status: 404,
          msg: `article ${article_id} - has no comments`,
        });
      }
      return result.rows;
    });
};