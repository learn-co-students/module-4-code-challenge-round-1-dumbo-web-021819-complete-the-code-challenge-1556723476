import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} onClick={(event) => {props.handleClick(event, props.book)}}></img>
    </div>
  );
};

export default Book;
