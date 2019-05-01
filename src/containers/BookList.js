import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  generateBooks = () => {
    return this.props.books.map(book => {
      return <Book handleChange={this.props.handleChange} key={book.id} book={book}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.generateBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
