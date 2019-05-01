import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log(props);
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.books.map(book => { return <Book book={book} handleRemove={props.handleRemove}/>})}</ul>
    </div>
  );
};

export default Bookshelf;
