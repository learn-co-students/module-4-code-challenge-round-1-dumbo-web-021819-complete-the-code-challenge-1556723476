import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div onClick={props.handleShelfClick}>
      <h1>Book Shelf</h1>
      <ul>{<Book book={props.book}/>}</ul>
    </div>
  );
};

export default Bookshelf;
