import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelfBooks: []
  }


  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then((response) => {
      return response.json()
    })
    .then((bookObj) => {
      this.setState({
        books: bookObj
      })
    })
  }

  handleClick = (book) => {
    let shelfList = [...this.state.shelfBooks]
    if(!shelfList.includes(book)){
      this.setState({
        shelfBooks: [book,...this.state.shelfBooks]
      })}
  }

  removalClick = (book) => {
    // console.log(book)
    let newShelfArray = [...this.state.shelfBooks]
    // console.log(newShelfArray)
    newShelfArray.splice( newShelfArray.indexOf(book), 1 );
    // console.log(newShelfArray)
    this.setState({
      shelfBooks: newShelfArray
    })
  }

  handleSubmit = (event, book) => {
    event.preventDefault()
    this.setState({
      books: [book,...this.state.books]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
        <Bookshelf removalClick={this.removalClick} shelfBooks={this.state.shelfBooks}/>
      </div>
    );
  }
}

export default App;
