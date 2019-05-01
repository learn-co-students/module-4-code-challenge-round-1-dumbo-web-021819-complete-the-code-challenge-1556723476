import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

	//pass each book into the book component
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.props.allBooks.map(book  => 
        	<Book title={book.title} author={book.author} img={book.img} onClick={this.props.onBookClick}/>)}
        </ul>
      </div>
    );
  }
}

export default BookList;
