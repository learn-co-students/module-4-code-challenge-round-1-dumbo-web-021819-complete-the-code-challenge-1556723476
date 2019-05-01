import React from "react";

const Book = props => {
  // console.log(props.bookObj)
  return (
    <div>
      <h2>{props.bookObj.title}</h2>
      <img onClick={(event) => props.handleClick(event,props.bookObj)} alt={props.bookObj.title} src={props.bookObj.img}/>
    </div>
  );
};

export default Book;
