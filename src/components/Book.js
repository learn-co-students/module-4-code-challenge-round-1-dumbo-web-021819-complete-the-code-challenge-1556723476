import React from "react";

const Book = props => {

  //set clicked state in here..if clicked is false it is only in booklist, if clicked is true it is in both.
  //when true it should be added to the bookshelf, when false it should be removed from the bookshelf/only in booklist
  return (
    <div onClick={() => {props.handleClick(props.book)}}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.name} />
    </div>
  );
};

export default Book;
