import React, { Component } from "react";
import Book from '../components/Book'
import Form from "../components/Form";

class BookList extends Component {


  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{this.props.books.map(book => <Book handleClick={this.props.handleClick} book={book}/>)}</ul>
      </div>
    );
  }
}

export default BookList;
