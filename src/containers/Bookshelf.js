import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.books.map(book => <Book handleClick={props.handleClick} book={book} />)}</ul>
    </div>
  );
};

export default Bookshelf;
