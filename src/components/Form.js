import React from "react";

class Form extends React.Component {

  state ={
    name: ""
  }

  handleChange =(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // make it controlled by using state
  
  render() {
    return <form onSubmit={(event) => {this.props.handleSubmit(event)}}>
      <input onChange={this.handleChange} name='title' value={this.state.title} placeholder={'title'} />
      <input onChange={this.handleChange} name= 'author' value={this.state.author} placeholder={'author'} />
      <input onChange={this.handleChange} name='img' value={this.state.img} placeholder={'img'} />
      
      <input type='submit'/>
    </form>
    
  }
}

export default Form;
