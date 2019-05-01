import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function generateShelvedBooks() {
    return props.shelf.map(book => {
      return <Book book={book}/>
    })
  }

  return (
    <div onChange={props.removeFromShelf}>
      <h1>Book Shelf</h1>
      <p>{generateShelvedBooks()}</p>
    </div>
  );
};

export default Bookshelf;
