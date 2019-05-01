import React from "react";

class Form extends React.Component {
  state={
    title: "",
    author: "",
    imageUrl: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add a Book</h2>
          <form onSubmit={this.props.handleFormSubmit}>
            <input onChange={this.handleChange} name="title" type="text" value={this.state.title} placeholder="Title"/>
            <input onChange={this.handleChange} name="author" type="text" value={this.state.author} placeholder="Author"/>
            <input onChange={this.handleChange} name="imageUrl" type="text" value={this.state.imageUrl} placeholder="Image Url"/>
            <input type="Submit" value="submit"/>
          </form>
    </div>
      )
  }
}

export default Form;
