import React from "react";

const ShelfBook = props => {

  return (
    <div onClick={() => {props.removalClick(props.book)}}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.name} />
    </div>
  );
};

export default ShelfBook;
