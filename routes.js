const express = require('express');
const Book = require('./bookModule.js');

const router = express.Router();


router.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
  });
  
router.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  });
  
router.post('/books', async (req, res) => {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
    });
    await book.save();
    res.status(201).json(book);
  });

router.put('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    book.title = req.body.title;
    book.author = req.body.author;
    book.year = req.body.year;
    await book.save();
    res.json(book);
  });
  
router.delete('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    await book.deleteOne();
    res.json(book);
  });

module.exports = router;