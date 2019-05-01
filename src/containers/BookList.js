import React from "react";
import Book from "../components/Book";
import Form from "../components/Form";

// Functional component that handles
// the displaying of books. State is
// handled by App to avoid array
// duplication and allow data to be
// provided to Bookshelf
const BookList = ({books, onBookCreate, onBookClick}) => {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onBookCreate={onBookCreate}/>
        <ul>{books.map(book => <Book book={book} onBookClick={onBookClick}/>)}</ul>
      </div>
    );
  }

export default BookList;
