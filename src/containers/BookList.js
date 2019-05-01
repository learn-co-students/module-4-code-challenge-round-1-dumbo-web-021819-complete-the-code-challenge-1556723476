import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  state={
    clicked: false
  }

  handleSubmit = () => {
    event.preventDefault(event)
    console.log('I hit the button')
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <ul>
        {this.props.books.map(book => <li onClick={() => {this.props.addToBookshelf(book)}}><Book title={book.title} img={book.img} /></li>)}
        </ul>
      </div>
    );
  }
}

export default BookList;
