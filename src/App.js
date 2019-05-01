import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    currentBook: {}
  }
  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then((response) => {
      return response.json();
    }).then((books) => {
      this.setState({
        books: books
      })
    })
  }

  handleClick = (book) => {
    console.log(book)
      this.setState({
        currentBook: book
      })
    }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
  }
  handleShelfClick = () => {
    console.log('click')
  }
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
        <Bookshelf book={this.state.currentBook} handleShelfClick={this.handleShelfClick}/>
      </div>
    );
  }
}

export default App;
