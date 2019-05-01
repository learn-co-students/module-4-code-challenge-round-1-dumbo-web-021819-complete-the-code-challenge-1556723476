import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    books: [],
    listBooks: [],
    selectedBooks: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(response => response.json())
    .then(bookData => {
      this.setState({
        books: bookData,
        listBooks: bookData
      })
    })
  }

  handleClick = (clickedBook) => {
    if (this.state.listBooks.includes(clickedBook)) {
      let newListArray = this.state.listBooks.filter(book=> { return book.id != clickedBook.id})
      let newSelectionsArray = this.state.selectedBooks
      newSelectionsArray.unshift(clickedBook)
      this.setState({
        listBooks: newListArray,
        selectedBooks: newSelectionsArray
      })
    } else {
      let newSelectionsArray = this.state.selectedBooks.filter(book=> {return book.id != clickedBook.id})
      let newListArray = this.state.listBooks
      newListArray.unshift(clickedBook)
      this.setState({
        listBooks: newListArray,
        selectedBooks: newSelectionsArray
      })
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.author.value)
    let newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.imageUrl.value
    }
    let newListArray = this.state.listBooks
    newListArray.unshift(newBook)
    this.setState({
      listBooks: newListArray
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList handleFormSubmit={this.handleFormSubmit} handleClick={this.handleClick} books={this.state.listBooks}/>
        <Bookshelf handleClick={this.handleClick} selectedBooks={this.state.selectedBooks}/>
      </div>
    );
  }
}

export default App;
