import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  // Books belongs in App state
  // to avoid creating a separate
  // array to hold only the shelved
  // books. Single source of truth
  state = {
    books: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({ books }))
    .then(() => {
      // By default, all books aren't shelved
      const books = this.state.books.map(book => {
        return {...book, shelved: false}
      })
      this.setState({ books })
    })
  }

  // I could've done add and delete
  // in one function if I took in a boolean
  // (removed/added) as a parameter and set
  // shelved to that. Decided to split into
  // two functions in case we decide to
  // persist at a later time and follow SRP
  handleBookClick = (id) => {
    const books = this.state.books.map(book => {
      return book.id === id ? {...book, shelved: true} : book;
    })
    this.setState({ books })
  }

  handleBookDelete = (id) => {
    const books = this.state.books.map(book => {
      return book.id === id ? {...book, shelved: false} : book;
    })
    this.setState({ books })
  }

  shelvedBooks = () => this.state.books.filter(book => book.shelved)

  strEq = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()

  // Books are considered the same
  // if the title and authors are
  // equal. Books can have the same
  // name and be by different authors
  // so it's better to check both.
  bookExists = (book) => this.state.books.some(b => this.strEq(b.title, book.title) && this.strEq(b.author, book.author))

  addBook = (book) => {
    if(!this.bookExists(book)) {
      const books = [...this.state.books]
      // Add the book to the beginning of the array
      // But, the new book's ID isn't 0. 
      // It's len(books) + 1
      books.unshift({
        id: books.length + 1,
        title: book.title,
        author: book.author,
        img: book.img,
        shelved: false
      })
      this.setState({ books })
    }
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} onBookClick={this.handleBookClick} onBookCreate={this.addBook}/>
        <Bookshelf books={this.shelvedBooks()} onBookClick={this.handleBookDelete}/>
      </div>
    );
  }
}

export default App;
