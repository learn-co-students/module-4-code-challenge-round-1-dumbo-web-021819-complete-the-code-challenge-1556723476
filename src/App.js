import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    shelfBooks: [],
    selectedBook: {},
    newBook: {
      title: '',
      author: '',
      img: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(booksJSON => {
      this.setState({
        books: booksJSON,
        ...this.state.shelfBooks,
        ...this.state.selectedBook,
        ...this.state.newBook
      })
    })
  }

  handleClick = (book) => {
    this.setState({
      ...this.state.books,
      ...this.state.shelfBooks,
      selectedBook: book,
      ...this.state.newBook
    })
    let newShelfBooks;
    if (this.state.shelfBooks.includes(book)) {
      newShelfBooks = this.state.shelfBooks.filter(book => book.id !== this.state.selectedBook.id);
      return newShelfBooks;
    } else {
      newShelfBooks = this.state.shelfBooks.push(book);
      return newShelfBooks;
    }
    this.setState({
      ...this.state.books,
      shelfBooks: newShelfBooks,
      ...this.state.selectedBook,
      ...this.state.newBook
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }


  handleChange = (newBook) => {
    // this will create a new book and add it to the DOM
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} handleSubmit={this.handleSubmit} newBook={this.state.newBook} />
        <Bookshelf shelfBooks={this.state.shelfBooks} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
