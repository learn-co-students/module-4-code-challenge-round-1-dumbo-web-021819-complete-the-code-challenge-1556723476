import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = (props) => {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleFormSubmit={props.handleFormSubmit}/>
        <ul>{props.books.map(singleBook=> {return <Book handleClick={props.handleClick} book={singleBook}/>})}</ul>
      </div>
    )
}

export default BookList;
