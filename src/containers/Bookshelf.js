import React from "react";
import Book from "../components/Book";

const Bookshelf = ({books, onBookClick}) => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books.map(book => <Book book={book} onBookClick={onBookClick}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
