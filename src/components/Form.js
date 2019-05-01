import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: '',
    newBookArray: [...this.props.books]
  }

  // handleAddTitle = (event) => {
  //   this.setState({ title: event.target.value })
  //   console.log('this is title', this.state.title)
  // }
  //
  // handleAddAuthor = (event) => {
  //   this.setState({ author: event.target.value })
  //   console.log('this is author', this.state.author)
  // }
  //
  // handleAddImg = (event) => {
  //   this.setState({img: event.target.value})
  //   console.log('this is img', this.state.img)
  // }
  //

  handleAddNewBook = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('this is what is being changed', event.target.name)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    };

    console.log(newBook)
    this.setState({
      newBookArray: this.props.books.push(newBook)
    })
    console.log(this.props.books)
  }



  render() {
    return <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" value={this.state.title} name='title' onChange={this.handleAddNewBook} />
          </label>
          <label>Author:
            <input type="text" value={this.state.author} name='author' onChange={this.handleAddNewBook} />
          </label>
          <label>Image:
            <input type="text" value={this.state.img} name='img' onChange={this.handleAddNewBook} />
          </label>
          <input type="submit" value='Submit' />
        </form>}
  }

export default Form;
