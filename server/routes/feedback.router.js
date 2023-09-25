const express = require("express");
const router = express.Router();
const pool = require("../modules/pool"); //neon database pool config
// const pool = require("../modules/local-pool"); //local pool config

// GET all orders that have been placed, populate with data from the pizza collection
router.get("/", (req, res) => {
  // Find all orders and return them
  pool
    .query('SELECT * FROM "feedback" ORDER BY id DESC;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /feedback", error);
      res.sendStatus(500);
    });
});

// Adds a new book to the list of awesome reads
// Request body must be a book object with a title and author.
router.post("/", (req, res) => {
  let feedback = req.body; // like this: {title: Moby Dick, author: Herman}
  // console.log(`Adding feedback`, feedback);

  let queryText = ` INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comments,
    ])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const deleteSQLQuery = "DELETE FROM feedback WHERE id = $1;";
  pool
    .query(deleteSQLQuery, [id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}); // END PUT Route

module.exports = router;
