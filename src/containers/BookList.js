import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <Form handleSubmit={this.props.handleSubmit}/>
        <h1><img id="bookimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhqHIApvnxae-vMvHtTDieJgFcu2coEihQafXjPHLwAyUi9l6"/>&nbsp;&nbsp;Book List</h1>
        <ul>{this.props.books.map(book =>
        <Book handleClick={this.props.handleClick} book={book}/>)}</ul>
      </div>
    );
  }
}

export default BookList;
