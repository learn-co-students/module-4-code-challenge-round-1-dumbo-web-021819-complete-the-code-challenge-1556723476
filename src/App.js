import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    filtBooks: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(r => r.json())
    .then(JSON => {
      this.setState({
        books: JSON
      })
    })
  }

  handleClick = (clickedBook) => {
    let copyBook = [...this.state.books]
    let newArr = [...this.state.filtBooks]
    copyBook.map(book => {
      if((book.id === clickedBook.id) && (this.state.filtBooks.includes(clickedBook) === false)) {
        newArr.push(book)
      }
    })
    this.setState({
      filtBooks: newArr
    })
  }

  handleRemove = (clickedBook) => {
    let copyBook = [...this.state.filtBooks]
    copyBook.map(book => {
      if(book.id === clickedBook.id){
        copyBook.splice(copyBook.indexOf(book), 1)
      }
    })
    this.setState({
      filtBooks: copyBook
    })
  }

  handleSubmit = (event, newBook) => {
    event.preventDefault()
    const newBooks = [newBook, ...this.state.books]
    
    this.setState({
      books: newBooks
    })
  }


  render() {
    return (
      <div className="book-container">
        <BookList handleSubmit={this.handleSubmit} handleClick={this.handleClick} books={this.state.books} />
        <Bookshelf handleClick={this.handleRemove} books={this.state.filtBooks}/>
      </div>
    );
  }
}

export default App;
