import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    books: [],
    selectedBooks: []
  }

//Original data fetch
  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(response => response.json())
    .then(bookData => {
      this.setState({
        books: bookData
      })
    })
  }

//Handles click event for any of the books in either list
  handleClick = (event, clickedBook) => {
    // removes selcted book from list and adds to shelf, and vice versa

    // if (this.state.listBooks.includes(clickedBook)) {
    //   let newListArray = this.state.listBooks.filter(book=> { return book.id != clickedBook.id})
    //   let newSelectionsArray = this.state.selectedBooks
    //   newSelectionsArray.unshift(clickedBook)
    //   this.setState({
    //     listBooks: newListArray,
    //     selectedBooks: newSelectionsArray
    //   })
    // } else {
    //   let newSelectionsArray = this.state.selectedBooks.filter(book=> {return book.id != clickedBook.id})
    //   let newListArray = this.state.listBooks
    //   newListArray.unshift(clickedBook)
    //   this.setState({
    //     listBooks: newListArray,
    //     selectedBooks: newSelectionsArray
    //   })
    // }


    //leaves selected book in list as per Readme

    if (event.target.parentElement.parentElement.parentElement.className === 'book-list') {
      if (!this.state.selectedBooks.includes(clickedBook)) {
        let newSelectionsArray = this.state.selectedBooks
        newSelectionsArray.unshift(clickedBook)
        this.setState({
          selectedBooks: newSelectionsArray
        })
      }
    } else if (this.state.selectedBooks.includes(clickedBook)) {
        let newSelectionsArray = this.state.selectedBooks.filter(book=> {return book.id != clickedBook.id})
        this.setState({
          selectedBooks: newSelectionsArray
        })
      }
  }

//adds new book but does not persist to the db
  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.author.value)
    let newBook = {
      id: null,
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.imageUrl.value
    }
    let newListArray = this.state.books
    newListArray.unshift(newBook)
    this.setState({
      books: newListArray
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList handleFormSubmit={this.handleFormSubmit} handleClick={this.handleClick} books={this.state.books}/>
        <Bookshelf handleClick={this.handleClick} selectedBooks={this.state.selectedBooks}/>
      </div>
    );
  }
}

export default App;
