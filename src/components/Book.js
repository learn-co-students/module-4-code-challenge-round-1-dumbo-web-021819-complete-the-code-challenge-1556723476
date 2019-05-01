import React from "react";

const Book = props => {

	//render each book here
	//when a user clicks on a book it should pass a copy onto bookshelf


  return (
    <div>
      <h2>{props.title}</h2>
      <img alt={props.title}src={props.img} onClick={(event) => {props.onClick(props.title)}}/>
    </div>
  );
};

export default Book;
