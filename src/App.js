import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    filterBooks: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json
      })
    })
  }

  handleClick = (id) => {

    let filterBooks = this.state.filterBooks;
    let newArray = this.state.books.filter( book => {
      if (filterBooks.includes(book)) {
        return filterBooks
      } else if (book.id === id){
        return book
      }

    })

    this.setState({
      filterBooks: newArray
    })
    // console.log(newArray);
    console.log(newArray);
  }

  handleRemove = (id) => {


  }

  render() {

    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} />
        <Bookshelf books={this.state.filterBooks} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
