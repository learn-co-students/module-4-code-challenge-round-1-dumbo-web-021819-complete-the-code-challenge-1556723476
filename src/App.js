import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelfArray: []
  }


  componentDidMount() {
      fetch('http://localhost:3005/books')
        .then(res => res.json())
        .then(booksData => {
          this.setState({
            books: booksData
          })
        })
  }

  handleClickedBook = (currentBook) => {
    console.log('this is clicked book', currentBook)
    let newBookArray = [...this.state.bookShelfArray]
    newBookArray.push(currentBook)

    this.setState({
      bookShelfArray: newBookArray
    })
  }

  handleRemoveBook = () => {
    console.log('this is remove')
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClickedBook={this.handleClickedBook}/>
        <Bookshelf books={this.state.bookShelfArray} handleRemoveBook={this.handleRemoveBook}/>
      </div>
    );
  }
}

export default App;
