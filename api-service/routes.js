const express = require('express');
const router = express.Router();
const db = require('./database');

router.get('/contact', (req, res, next) => {
  db.query('SELECT * FROM contact;', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

router.get('/contact/:id', (req, res, next) => {
  const { id } = req.params;
  db.query('SELECT * FROM contact WHERE id = $1;', [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

router.post('/contact', (req, res, next) => {
  const { name, age } = req.body;
  db.query(
    'INSERT INTO contact (name, age) VALUES($1, $2) RETURNING *;',
    [name, age],
    (error, results) => {
      if (error) throw error;
      res.status(201).json(results.rows);
    }
  );
});

router.put('/contact/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  db.query(
    'UPDATE contact SET name = $1, age = $2 WHERE id = $3 RETURNING *;',
    [name, age, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
});

router.delete('/contact/:id', (req, res, next) => {
  const { id } = req.params;
  db.query('DELETE FROM contact WHERE id = $1 RETURNING *', [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
});

module.exports = router;
