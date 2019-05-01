import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>AddBook</h3>
        <form onSubmit={event=>this.props.handleSubmit(event, this.state)} >
          <label>Title</label>
          <input onChange={this.handleChange} name="title" placeholder="Title here" value={this.state.title} />
          <label>Author</label>
          <input onChange={this.handleChange} name="author" placeholder="Author here" value={this.state.author} />
          <label>Image</label>
          <input onChange={this.handleChange} name="img" placeholder="Paste image for book here" value={this.state.img} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Form;
