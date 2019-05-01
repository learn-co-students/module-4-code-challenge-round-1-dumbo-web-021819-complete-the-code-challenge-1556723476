import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.selectedBooks.map(singleBook => {return <Book handleClick={props.handleClick} book={singleBook}/>})}</ul>
    </div>
  );
};

export default Bookshelf;
