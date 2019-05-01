import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {


  state = {
    books: [],
    selected: [],
    clicked: false
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(response => response.json())
    .then(bookArray => {
      this.setState({
        books: bookArray
      })
    })
  }


  handleSubmit = (event, bookObj) => {
    //this handleSubmit function is not being hit...
    event.preventDefault();
    console.log(event)
    //make a new copy of the book array
    //add bookObj
    //setState to new Array
    let newArray = [...this.state.books, bookObj]
    this.setState({
      books: newArray
    })
  }


  handleClick = (event, book) => {
    // console.log(book)
    //This sort of works but allows for multiple of the same book
    let newArray = [...this.state.selected, book]
    this.setState({
      selected: newArray
    })


    //Want to change the boolean, default is false
    // this.setState({
    //   clicked: !this.state.clicked
    // })


    // ABORTED
    // let favoriteArray = []
    // let newArray = [...this.state.selected]
    //
    // newArray.map(bookObj => {
    //   if (bookObj.id === book.id) {
    //     return bookObj
    //   } else {
    //     favoriteArray.push(bookObj)
    //   }
    // })



    console.log(this.state.selected)
  }

  //could also potentially change each book to have a clicked attribute 
  handleRemove = (event, book) {
    //remove an item from the Bookshelf
    // use the event and cross check it with books on the list...
    //if it exists, remove it from the copied array and setState to the new Array
  }



  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick}/>
        <Bookshelf books={this.state.selected} handleClick={this.handleClick} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
