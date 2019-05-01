import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form 
          handleSubmit={this.props.handleSubmit}
          title={this.props.title}
          author={this.props.author}
          img={this.props.img}
          handleFormChange={this.props.handleFormChange}
        />
        <ul>
          {this.props.books.map(book => (
            <Book onBookClick={this.props.onBookClick} book={book} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
