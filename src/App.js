import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state ={
    allBooks: [], 
    clicked: false, 
    selectedBooks: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(allBooks => {
      this.setState({
        allBooks: allBooks
      })
    })
  }

handleAddToBookshelf = (clickedBook) => {
  console.log(clickedBook)
  this.setState({
    clicked: !this.state.clicked, 
    selectedBooks:[...this.state.selectedBooks, clickedBook]
  })
  // console.log(this.state.selectedBooks)
  // console.log(this.state.clicked)
}
//this does not work! 
//removes them all 
//look at the status of clicked maybe? 

handleRemoveFromBookshelf = (clickedBook) => {
  this.setState({
    clicked: !this.state.clicked, 
    selectedBooks: this.state.selectedBooks.filter(book => {
      return this.state.clicked === true
    })
  })
  // console.log(this.state.selectedBooks)
}
  

  render(){
    return (
      <div className="book-container">
        <BookList books={this.state.allBooks} addToBookshelf={this.handleAddToBookshelf} />
        <Bookshelf books={this.state.selectedBooks} removeFromBookshelf={this.handleRemoveFromBookshelf}/>
      </div>
    );
  }
}

export default App;
