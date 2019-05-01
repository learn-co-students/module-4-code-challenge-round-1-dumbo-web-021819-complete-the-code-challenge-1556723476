import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleFormSubmit={this.props.handleFormSubmit}/>
        <ul>{this.props.books.map(singleBook=> {return <Book handleClick={this.props.handleClick} book={singleBook}/>})}</ul>
      </div>
    );
  }
}

export default BookList;
