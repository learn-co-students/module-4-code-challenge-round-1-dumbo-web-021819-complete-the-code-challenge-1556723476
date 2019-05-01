import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  // state = {
  //   books: []
  // }
  //
  // componentDidMount(){
  //   fetch('http://localhost:3005/books')
  //   .then(response => response.json())
  //   .then(json => {
  //     this.setState({
  //       books: json
  //     })
  //   })
  // }

  render() {

    return (

      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.props.books.map(book => { return <Book book={book} handleClick={this.props.handleClick} />})}</ul>
      </div>
    );
  }
}

export default BookList;
