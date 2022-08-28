const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres: This will make details and id visible

  const genreId = req.params.id;
  console.log('GenreId:', genreId);

  const queryText = 
  `SELECT array_agg("name") AS "name"
   FROM "genres"
   JOIN movies_genres ON movies_genres.genre_id = genres.id
   JOIN movies ON movies.id = movies_genres.movie_id
   WHERE movies_genres.movie_id = $1;`;

   pool.query(queryText, [genreId])
   .then ((result) => {
      res.send(result.rows);
      console.log('GET genre router', router.rows);
   }).catch((err) => {
      console.error("error in GET", err);
    
  res.sendStatus(500)
});
});

module.exports = router;