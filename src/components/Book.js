import React from "react";

class Book extends React.Component{

  // state={
  //   clicked: false
  // }
  
  render(){
    return (
    <div>
      <h2>{this.props.title}</h2>
      <img src={this.props.img} alt={this.props.title} />
    </div>
  );
  }}

export default Book;
