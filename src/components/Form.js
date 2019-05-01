import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
      <h3>Add a New Book!</h3>
      Title:<input onChange={this.handleChange} type="textfield" name="title" value={this.state.title}></input><br/><br/>
      Author:<input onChange={this.handleChange} type="textfield" name="author" value={this.state.author}></input><br/><br/>
      Image:<input onChange={this.handleChange} type="textfield" name="img" value={this.state.img}></input><br/><br/>
      <input type="submit" value="Submit" />
      </form>
  )}
}

export default Form;
