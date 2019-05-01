import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form fuckItUpToTheTempo={this.props.lookinForSomeShitDownBelow}/>
        <ul>{this.props.books.map(book => < Book book={book} key={book.id} handleClick={this.props.handleClick} /> )}</ul>
      </div>
    );
  }
}

export default BookList;
