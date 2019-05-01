import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={event=>props.handleBook(event, props.book)} src={props.book.img} alt={props.book.title} />
    </div>
  );
};

export default Book;
