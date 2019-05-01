import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={() => this.props.handleSubmit(this.props.newBook)}>
        Title: <input type="text" id="title" name="title" value={this.props.newBook.title} />
        Name: <input type="text" id="author" name="author" value={this.props.newBook.author} />
        IMG: <input type="text" id="img" name="text" value={this.props.newBook.img} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
