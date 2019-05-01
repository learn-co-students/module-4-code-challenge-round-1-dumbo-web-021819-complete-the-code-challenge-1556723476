import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      <ul>{props.bookToGoOnShelf.map(book  => 
        	<Book title={book.title} author={book.author} img={book.img} onClick={props.onBookClick}/>) }
        	</ul>
    </div>
  );
};

export default Bookshelf;
