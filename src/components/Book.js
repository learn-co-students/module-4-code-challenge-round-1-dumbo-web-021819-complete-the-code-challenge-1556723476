import React from "react";

const Book = props => {
  return (
    <li onClick={props.handleChange}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.title}/>
    </li>
  );
};

export default Book;
