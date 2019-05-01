import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    addedBooks: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res=>res.json())
    .then(bookArr=>{
      this.setState({
        books: bookArr
      })
      console.log(bookArr)
    })
  }

  handleClick = (event, clickedBook) => {
    let bookshelf = [...this.state.addedBooks]
    if (bookshelf.includes(clickedBook)) {
      let index = bookshelf.indexOf(clickedBook);
      if (index > -1) {
        bookshelf.splice(index, 1);
      }
      this.setState({
        addedBooks: bookshelf
      })
    } else {
      bookshelf.push(clickedBook)
      this.setState({
        addedBooks: bookshelf
      })
    }
  }

  handleSubmit = (event, book) => {
    event.preventDefault();
    let newBookArr = [book, ...this.state.books]
    // newBookArr = newBookArr.push(book)
    console.log(newBookArr)
    this.setState({
      books: newBookArr
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          className="book-list"
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          allBooks={this.state.books} />
        <Bookshelf
          className="bookshelf"
          myBooks={this.state.addedBooks}
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
