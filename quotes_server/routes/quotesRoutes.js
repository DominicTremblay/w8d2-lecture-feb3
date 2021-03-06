const express = require('express');

const router = express.Router();

module.exports = ({ getQuotes, addQuote, deleteQuote }) => {
  router.get('/', (req, res) => {
    getQuotes().then(quotes => res.json(quotes));
  });

  router.post('/', (req, res) => {
    const { quote } = req.body;

    addQuote(quote).then(quote => res.json(quote));
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;

    deleteQuote(id).then(response => res.json({ msg: 'Quote deleted' }));
  });

  return router;
};
