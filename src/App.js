import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookshelf: [],
    title: "",
    author: "",
    img: ""
  };

  // initial books
  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(bookData => {
        this.setState({
          books: bookData
        });
      });
  }

  // Adds book to bookshelf
  handleBookClick = clickedBook => {
    if (!this.state.bookshelf.includes(clickedBook)) {
      let newBookshelf = this.state.bookshelf.map(book => book);
      newBookshelf.unshift(clickedBook);
      this.setState({
        bookshelf: newBookshelf
      });
    }
  };

  // Takes off the book from bookshelf
  handleBookshelfBookClick = clickedBook => {
    console.log(clickedBook);
    let newBookshelf = this.state.bookshelf.map(book => book);
    let bookIndex = newBookshelf.indexOf(clickedBook);
    newBookshelf.splice(bookIndex, 1);
    this.setState({
      bookshelf: newBookshelf
    });
  };

  // Adding a new book
  handleSubmit = event => {
    event.preventDefault()
    let title = this.state.title, author = this.state.author, img = this.state.img
    let newBook = {title, author, img}
    let bookExists;
    let newBooks = this.state.books.map(book => book)

    // Confirm if book exists already
    for (let i = 0; i < this.state.books.length; i++) {
      if (newBooks[i].title.toLowerCase() === newBook.title.toLowerCase() && newBooks[i].author.toLowerCase() === newBook.author.toLowerCase()) {
        bookExists = true
      }
    }

    // Add book to this.state.books
    if (!bookExists) {
      console.log(bookExists)
      newBooks.unshift(newBook)
      this.setState({
        books: newBooks
      })
    }
  };

  // Controlled Form onChange Listener
  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          onBookClick={this.handleBookClick}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          author={this.state.author}
          img={this.state.img}
          handleFormChange={this.handleFormChange}
        />
        <Bookshelf
          books={this.state.bookshelf}
          onBookshelfBookClick={this.handleBookshelfBookClick}
        />
      </div>
    );
  }
}

export default App;
