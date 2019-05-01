import React from "react";

class Form extends React.Component {
  render() {
    return (
    <div>
      <h3>Add a book to the list:</h3>
      <form onSubmit={this.props.submitHandler}>
        <input value={this.props.titleValue} onChange={this.props.titleChangeHandler} type="textfield" placeholder="title" name="title" />
        <input value={this.props.authorValue} onChange={this.props.authorChangeHandler} type="textfield" placeholder="author" name="author" />
        <input value={this.props.imageValue} onChange={this.props.imageChangeHandler}type="textfield" placeholder="image" name="image" />
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
}

export default Form;
