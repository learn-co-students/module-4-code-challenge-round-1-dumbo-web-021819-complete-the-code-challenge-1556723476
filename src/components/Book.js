import React from "react";

// The width of the div should
// only be the width of its
// contents
//
// https://stackoverflow.com/questions/450903/how-to-make-div-not-larger-than-its-contents
const bookStyle = {
  display: "table"
};

const Book = ({book, onBookClick}) => {
  const {id, title, img} = book
  return (
    <div style={bookStyle} onClick={() => onBookClick(id)}>
      <h2>{title}</h2>
      <img src={img} alt={title} />
    </div>
  );
};

export default Book;
