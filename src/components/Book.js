import React from "react";

const Book = (props) => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={() => {props.handleClickedBook(props.book)}} src={props.book.img} alt={props.book.name} />
    </div>
  );
};

export default Book;
