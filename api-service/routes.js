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
  const { firstname, lastname, email, phone, birthdate } = req.body;
  db.query(
    'INSERT INTO contact (firstname, lastname, email, phone, birthdate) VALUES($1, $2, $3, $4, $5) RETURNING *;',
    [firstname, lastname, email, phone, birthdate],
    (error, results) => {
      if (error) throw error;
      res.status(201).json(results.rows);
    }
  );
});

router.put('/contact/:id', (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname, email, phone, birthdate } = req.body;
  db.query(
    'UPDATE contact SET firstname = $1, lastname = $2, email = $3, phone = $4, birthdate = $5 WHERE id = $6 RETURNING *;',
    [firstname, lastname, email, phone, birthdate, id],
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
