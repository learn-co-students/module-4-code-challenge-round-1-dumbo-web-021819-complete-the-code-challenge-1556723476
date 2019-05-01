import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks: [],
    shelfBooks: [],
    titleValue: "",
    authorValue: "",
    imageValue: ""
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(response => {
        return response.json()
      })
      .then(booksArr => {
        this.setState({
          allBooks: booksArr
        })
      })
  }

  clickAddHandler = (addedBook) => {
    let newShelfBooks = [addedBook,...this.state.shelfBooks]
    this.setState({
      shelfBooks: newShelfBooks
    })
  }

  clickRemoveHandler = (removedBook) => {
    // let fixedShelfBooks = [...this.state.shelfBooks]
    // let chosenBookIdx = fixedShelfBooks.indexOf(removedBook)
    // fixedShelfBooks = fixedShelfBooks.splice(chosenBookIdx, 0)

    let fixedShelfBooks = [...this.state.shelfBooks]
    fixedShelfBooks = fixedShelfBooks.filter(bookObj => 
        bookObj.id != removedBook.id
      )

    this.setState({
      shelfBooks: fixedShelfBooks
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    
    let newBookObj = {
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.image.value
    }

    let addedBookShelf = [newBookObj,...this.state.allBooks]

    this.setState({
      allBooks: addedBookShelf,
      values: {
        title: event.target.title.value,
        author: event.target.author.value,
        img: event.target.image.value
      }
    })

  }

  titleChangeHandler = (event) => {
    this.setState({
      titleValue: event.target.value
    })
  }

  authorChangeHandler = (event) => {
    this.setState({
      authorValue: event.target.value
    })
  }

  imageChangeHandler = (event) => {
    this.setState({
      imageValue: event.target.value
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList imageValue={this.state.imageValue} authorValue={this.state.authorValue} titleValue={this.state.titleValue} imageChangeHandler={this.imageChangeHandler} authorChangeHandler={this.authorChangeHandler} titleChangeHandler={this.titleChangeHandler} submitHandler={this.submitHandler} clickAddHandler={this.clickAddHandler} booksArray={this.state.allBooks}/>
        <Bookshelf clickRemoveHandler={this.clickRemoveHandler} shelfBooksArray={this.state.shelfBooks}/>
      </div>
    );
  }
}

export default App;
