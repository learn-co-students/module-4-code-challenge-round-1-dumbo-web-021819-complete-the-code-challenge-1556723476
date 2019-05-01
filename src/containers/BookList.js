import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>
        {this.props.allBooks.map(book=><Book
          handleBook={this.props.handleClick}
          handleSubmit={this.props.handleSubmit}
          book={book}/>)}
        </ul>
      </div>
    );
  }
}

export default BookList;
