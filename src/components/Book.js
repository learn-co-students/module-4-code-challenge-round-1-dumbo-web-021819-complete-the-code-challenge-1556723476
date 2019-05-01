import React from "react";

const Book = (props) => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={()=> {props.handleClick(props.book)}} src={props.book.img} alt='' />
    </div>
  );
};

export default Book;
