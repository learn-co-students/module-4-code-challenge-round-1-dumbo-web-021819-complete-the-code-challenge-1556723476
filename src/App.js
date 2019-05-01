import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

state = {
	allBooks: [],
	bookToGoOnShelf: [],

}	


componentDidMount(){
		fetch("http://localhost:3005/books")
		.then(res => res.json())
		.then(library => 
			this.setState({
				allBooks: library
			}))
	}

clickedBookList(title) {
//get the book from the array of allBooks and add it to the bookShelf
//find the book
let book = this.state.allBooks.find(book => book.title === title)
//add this book to the bookInShelf if it doesn't already exist
console.log(book)
let bookInShelf = this.state.bookToGoOnShelf.slice()
if (bookInShelf.indexOf(book) === -1 ) 
{console.log("Book not in shelf");
bookInShelf.push(book)}

//Book not on shelf, now add it to the array of books
this.setState({
	bookToGoOnShelf: bookInShelf
})
}
clickedShelfList(title) {
	console.log("please remove",title)
	//remove the item from the array of bookToGoOnShelf
	let bookInShelf = this.state.bookToGoOnShelf.slice()
	let bookOut = []
	for (var i = 0; i < bookInShelf.length; i++) {
		if (bookInShelf[i].title !== title)
		{
			bookOut.push(bookInShelf[i])
		}	
	}
	this.setState({
		bookToGoOnShelf: bookOut
	})
}


render() {
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} onBookClick={this.clickedBookList.bind(this)}/>
        <Bookshelf bookToGoOnShelf={this.state.bookToGoOnShelf} onBookClick={this.clickedShelfList.bind(this)}/>
      </div>
    );
  }
}

export default App;
