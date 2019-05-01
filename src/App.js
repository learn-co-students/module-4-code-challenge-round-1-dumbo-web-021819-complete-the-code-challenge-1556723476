import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookList: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(r => r.json())
    .then(booksArray => this.setState({bookList: booksArray}))
  }

  clickInList = (bookObj) => {
    if (!this.state.bookShelf.includes(bookObj)) {
      const bookShelfCopy = [...this.state.bookShelf]
      bookShelfCopy.push(bookObj)
      this.setState({bookShelf: bookShelfCopy})
    }
  }

  clickInShow = (bookObj) => {
    if (this.state.bookShelf.includes(bookObj)) {
      const bookShelfCopy = [...this.state.bookShelf]
      const index = bookShelfCopy.indexOf(bookObj)
      bookShelfCopy.splice(index, 1)
      this.setState({bookShelf: bookShelfCopy})
    }
  }

  yeahWeGonnaFuckThisAppUp = (yessir) => {
    const bookListCopyWHY = this.state.bookList;
    yessir.id = Date.now()
    bookListCopyWHY.push(yessir)
    this.setState({bookList: bookListCopyWHY})
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.bookList} 
        handleClick={this.clickInList}
        lookinForSomeShitDownBelow={this.yeahWeGonnaFuckThisAppUp} />
        <Bookshelf books={this.state.bookShelf} handleClick={this.clickInShow} />
      </div>
    );
  }
}

export default App;
