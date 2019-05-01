import React from "react";

class Form extends React.Component {

//Need to build controls for Form
//Ran out of time, this is incomplete!!!


  render() {
    return ( 
    	<div><h1>Add New Book</h1>
    	<input type="text" value={this.state.title}></input>
    	<input type="text" value={this.state.author}></input>
    	<input type="text" value={this.state.image}></input>
    	<button >Submit</button>


        </div>
    )
  }
}

export default Form;


/*{ 
   "id": 1, 
   "title": "The Great Gatsby", 
   "author": "F. Scott Fitzgerald", 
   "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg" 
}
*/