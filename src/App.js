import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(r => r.json())
    .then(booksArray => this.setState({books: booksArray})
    )
  }

  handleClick = (bookObj) => {
    const booksCopy = [...this.state.books]
    const index = booksCopy.indexOf(bookObj)
    bookObj.meLikey = !bookObj.meLikey
    booksCopy.splice(index, 1, bookObj)
    this.setState({books: booksCopy
    })
  }

  yeahWeGonnaFuckThisAppUp = (yessir) => {
    const booksCopyWHY = this.state.books;
    yessir.id = Date.now()
    booksCopyWHY.push(yessir)
    this.setState({books: booksCopyWHY})
  }

  render() {
    // console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books={this.state.books} 
        handleClick={this.handleClick}
        lookinForSomeShitDownBelow={this.yeahWeGonnaFuckThisAppUp} />
        <Bookshelf books={this.state.books.filter(book => book.meLikey)} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
