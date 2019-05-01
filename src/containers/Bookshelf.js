import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  console.log(props.books)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {props.books.map(book => <li onClick={() => {props.removeFromBookshelf(book)}}> <Book title={book.title} img={book.img} /> </li>)}
      </ul>
    </div>
  );
};

export default Bookshelf;
