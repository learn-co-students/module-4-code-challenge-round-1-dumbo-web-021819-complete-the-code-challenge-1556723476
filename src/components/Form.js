import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }


  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    })

    console.log(this.state)
  }

  //the above value of this.state is a bookObj...
  //use this book Obj to set the state of the original book array


  render() {
    return (<h1>{
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
        <label>Title</label>
        <input name="title" type="textfield" onChange={this.handleChange} value={this.state.title}></input>
        <label>Author</label>
        <input name="author" type="textfield" onChange={this.handleChange} value={this.state.author}></input>
        <label>Image Url</label>
        <input name="img" type="textfield" onChange={this.handleChange} value={this.state.img}></input>
        <input type="submit"></input>
      </form>
      }</h1>
  )}
}

export default Form;
