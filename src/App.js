import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  addBookToShelf = (e) => {
    this.state.bookshelf = this.state.bookshelf.concat(e.target)
  }

  constructor() {
    super()
    this.state = {
      books: [],
      bookshelf: []
    }
  }

  componentDidMount() {
    this.state = {
      books: fetch('http://localhost:3005/books')
      .then(res => res.json() )
      .then(books => {
        this.setState({books: books})
      })
    }
  }

  render() {
    return (
      <div className="book-container">
        <BookList handleChange={this.handleChange} books={this.state.books} />
        <Bookshelf shelf={this.state.bookshelf} removeFromShelf={this.handleChange} />
      </div>
    );
  }
}

export default App;
