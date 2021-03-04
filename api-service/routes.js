const express = require('express');
const router = express.Router();
const db = require('./database');

router.get('/contacts', (req, res, next) => {
  db.query('SELECT * FROM contact;', (error, results) => {
    if (error) next(error);
    res.status(200).json(results.rows);
  });
});

router.get('/contacts/:id', (req, res, next) => {
  const { id } = req.params;
  db.query('SELECT * FROM contact WHERE id = $1;', [id], (error, results) => {
    if (error) next(error);
    res.status(200).json(results.rows);
  });
});

router.post('/contacts', (req, res, next) => {
  const { firstname, lastname, email, phone, birthdate } = req.body;
  db.query(
    'INSERT INTO contact (firstname, lastname, email, phone, birthdate) VALUES($1, $2, $3, $4, $5) RETURNING *;',
    [firstname, lastname, email, phone, birthdate],
    (error, results) => {
      if (error) next(error);
      res.status(201).json(results.rows);
    }
  );
});

router.put('/contacts/:id', (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname, email, phone, birthdate } = req.body;
  db.query(
    'UPDATE contact SET firstname = $1, lastname = $2, email = $3, phone = $4, birthdate = $5 WHERE id = $6 RETURNING *;',
    [firstname, lastname, email, phone, birthdate, id],
    (error, results) => {
      if (error) next(error);
      res.status(200).json(results.rows);
    }
  );
});

router.delete('/contacts/:id', (req, res, next) => {
  const { id } = req.params;
  db.query('DELETE FROM contact WHERE id = $1 RETURNING *', [id], (error, results) => {
    if (error) next(error);
    res.status(200).json(results.rows);
  });
});

module.exports = router;
