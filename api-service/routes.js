const express = require('express');
const router = express.Router();
const db = require('./database');

router.get('/person', (req, res, next) => {
  db.query('SELECT * FROM person;', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

router.get('/person/:id', (req, res, next) => {
  const { id } = req.params;
  db.query('SELECT * FROM person WHERE id = $1;', [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

router.post('/person', (req, res, next) => {
  const { name, age } = req.body;
  db.query(
    'INSERT INTO person (name, age) VALUES($1, $2) RETURNING *;',
    [name, age],
    (error, results) => {
      if (error) throw error;
      res.status(201).json(results.rows);
    }
  );
});

router.put('/person/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  db.query(
    'UPDATE person SET name = $1, age = $2 WHERE id = $3 RETURNING *;',
    [name, age, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
});

router.delete('/person/:id', (req, res, next) => {
  const { id } = req.params;
  db.query('DELETE FROM person WHERE id = $1 RETURNING *', [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

module.exports = router;
