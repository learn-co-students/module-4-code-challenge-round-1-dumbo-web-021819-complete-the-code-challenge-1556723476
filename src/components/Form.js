import React from "react";

class Form extends React.Component {
  render() {
    return (
    <h1>
      <form onSubmit={this.props.handleSubmit}>
        <input name='title' onChange={this.props.handleFormChange} placeholder="Title" type="text" value={this.props.title}/>
        <input name='author' onChange={this.props.handleFormChange} placeholder="Author" type="text" value={this.props.author}/>
        <input name='img' onChange={this.props.handleFormChange} placeholder="Image Link" type="text" value={this.props.img}/>
        <input type="Submit" value="Submit" />
      </form>
    </h1>
    );
  }
}

export default Form;
