const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/details/:id', (req, res) => {
  // Add query to get all genres: This will make details and id visible

  const genresId = req.params.id;
  console.log('Genre Server Is:', genresId);

  const queryText = 
  `SELECT array_to_string(array_agg("genres"."name"),', ') AS "genre"
   FROM "genres"
   JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
   JOIN "movies" on "movies_genres"."movie_id" = "movies"."id"
   WHERE "movies_genres"."movie_id" = $1;`;

   pool
   .query(queryText, [genresId])
   .then ((result) => {
      res.send(result.rows);
      console.log('GET genre router', result.rows);
   }).catch((err) => {
      console.error("error in GET", err);
      res.sendStatus(500)
});
});

module.exports = router;