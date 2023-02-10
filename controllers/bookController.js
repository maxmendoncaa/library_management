import express from 'express'

import { bookService } from '../services/bookService.js'

let bookController = {}

bookController.getAllBooks = async (req, res) => {
  let books = await bookService.getAllBooks();
  res.status(200).json(books);
};

bookController.getBookById  = async (req, res) => {
  let book = await bookService.getBookById(req.params.id);
  if (book == null)
    res.status(404).json({error: "Book not found!"})
  else
    res.status(200).json(book);
};

bookController.addBook = async (req, res) => {
  const book = await bookService.addBook(req.body);
  res.status(201).json(book);
};

bookController.updateBook = async (req, res) => {
  await bookService.updateBook(req.params.id, req.body);
  res.status(200).json({message: "Book details updated!"});
};

bookController.deleteBook = async (req, res) => {
  await bookService.deleteBook(req.params.id);
  res.status(200).json({message: "Book deleted"});
};


export { bookController }
