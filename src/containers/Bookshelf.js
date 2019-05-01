import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  return (
    <div className="book-list">
      <h1>Book Shelf</h1>
      <ul>{props.shelfBooksArray.map(shelfBookObj =>
        <Book clickRemoveHandler={props.clickRemoveHandler} shelfBookObj={shelfBookObj}/>
      )
      }
      </ul>
    </div>
  );
};

export default Bookshelf;
