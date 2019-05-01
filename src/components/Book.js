import React from "react";

const Book = props => {
  return (
    <div onClick={(event)=>{props.handleClick(event, props.book)}}>
      <h2>{props.book.title}</h2>
      <h4>by {props.book.author}</h4>
      <img alt={props.book.title} src={props.book.img} />
    </div>
  );
};

export default Book;
