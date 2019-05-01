import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
        <input onChange={this.handleChange} placeholder='title' value={this.state.title} name='title'/>
        <input onChange={this.handleChange} placeholder='author' value={this.state.author} name='author'/>
        <input onChange={this.handleChange} placeholder='img url' value={this.state.img} name='img'/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Form;
