import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form imageValue={this.props.imageValue} authorValue={this.props.authorValue} titleValue={this.props.titleValue} imageChangeHandler={this.props.imageChangeHandler} authorChangeHandler={this.props.authorChangeHandler} titleChangeHandler={this.props.titleChangeHandler} values={this.props.values} submitHandler={this.props.submitHandler}/>
        <ul>{this.props.booksArray.map(bookObj => 
          <Book clickAddHandler={this.props.clickAddHandler} bookObj={bookObj}/>
        )
        }
        </ul>
      </div>
    );
  }
}

export default BookList;
