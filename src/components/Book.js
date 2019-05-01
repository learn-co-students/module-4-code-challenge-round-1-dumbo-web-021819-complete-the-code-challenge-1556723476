import React from "react";

const Book = (props) => {
  if (props.bookObj) {
    return (
      <div>
        <h2>{props.bookObj.title}</h2>
        <img onClick={() => {props.clickAddHandler(props.bookObj)}} src={props.bookObj.img} />
      </div>
    );
  } else if (props.shelfBookObj) {
    return (
      <div>
        <h2>{props.shelfBookObj.title}</h2>
        <img onClick={() => {props.clickRemoveHandler(props.shelfBookObj)}} src={props.shelfBookObj.img} />
      </div>
    );
  }
};

export default Book;
