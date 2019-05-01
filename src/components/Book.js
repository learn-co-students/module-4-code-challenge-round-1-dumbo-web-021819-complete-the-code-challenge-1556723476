import React from "react";

const Book = props => {

  function takeid() {
    let id = props.book.id;
    props.handleClick(id);
  }

  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} onClick={takeid} />
    </div>
  );
};

export default Book;
