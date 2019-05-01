import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf:[]

  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(data =>
    this.setState({books: data}))
  }

  handleClick = (bookObj) => {
    const updatedBooks = [...this.state.bookshelf, bookObj]
    this.setState({
      bookshelf: updatedBooks
    })
  }

  handleRemoveClick = (bookObj) => {
    const removedItemFromBookshelf = this.state.bookshelf.filter(bookshelf => {
        return bookshelf.id !== bookObj.id
      })

      this.setState({
        bookshelf: removedItemFromBookshelf
      })
    }

  handleSubmit = (event, bookObj) => {
    event.preventDefault();
    const submitted = [...this.state.books, bookObj]
    this.setState({
      books: submitted
    } , () => (console.log(this.state))
    )
    }

    render() {
      return (
        <div className="book-container">
          <BookList books={this.state.books} handleClick={this.handleClick} handleSubmit={this.handleSubmit} className="book-list"/>

          <Bookshelf bookshelf={this.state.bookshelf} handleRemoveClick={this.handleRemoveClick} className="book-shelf"/>
        </div>
      );
    }
  }

  export default App;
