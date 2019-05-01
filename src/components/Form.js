import React from "react";

class Form extends React.Component {
  render() {
    return (<div>
          <h1>Add A Book</h1>
            <form> 
              <label> Title </label>
              <input type="text" name="title" />
              <label> Author </label>
              <input type="text" name="author" />
              <label> Image </label>
              <input type="text" name="img" />
              <button onClick={() => {this.props.handleSubmit(event)}} type="submit">Add New Book!</button>
            </form> 
      </div>)
  }
}

export default Form;
