import React from "react";
import ShelfBook from "../components/ShelfBook.js";

const Bookshelf = props => {
  return (
    <div className="bookshelf">
      <h1><img id="bookimg" src="https://i.ya-webdesign.com/images/librarian-clipart-book-rack-14.png"/>&nbsp;&nbsp;Book Shelf&nbsp;&nbsp;<img id="bookimg" src="https://i.ya-webdesign.com/images/librarian-clipart-book-rack-14.png"/></h1>
      <ul>{props.shelfBooks.map(book =>
      <ShelfBook removalClick={props.removalClick} book={book}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
