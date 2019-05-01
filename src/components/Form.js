import React from "react";

class Form extends React.Component {
  state={
    title: "",
    author: "",
    imageUrl: "",
    isHidden: true
  }

//toggles hidden state for form
  showForm = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

//constrols value for state from the inputs
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

//resets local state for the form inputs, hides form, and sends fcuntion back to app
  handleFormSubmitLocally = (event) => {
    this.setState({
      title: "",
      author: "",
      imageUrl: "",
      isHidden: true
    })
    this.props.handleFormSubmit(event)
  }

//actual form jsx to display conditionally
  formDisplay = () => {
    if (this.state.isHidden === false) {
      return (
        <form onSubmit={this.handleFormSubmitLocally}>
          <input onChange={this.handleChange} name="title" type="text" value={this.state.title} placeholder="Title"/>
          <input onChange={this.handleChange} name="author" type="text" value={this.state.author} placeholder="Author"/>
          <input onChange={this.handleChange} name="imageUrl" type="text" value={this.state.imageUrl} placeholder="Image Url"/>
          <input type="Submit" value="submit"/>
        </form>
      )
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showForm}>Add a Book</button>
        {this.formDisplay()}
    </div>
      )
  }
}

export default Form;
