import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.clickedBooks.map(book => {
        return <Book bookObj={book}/>
      })}</ul>
    </div>
  );
};

export default Bookshelf;
