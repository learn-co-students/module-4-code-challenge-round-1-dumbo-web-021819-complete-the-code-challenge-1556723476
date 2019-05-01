import React from "react";

class Form extends React.Component {
  // Controlled form
  state = {
    title: '',
    author: '',
    img: ''
  }

  render() {
    return (<form>
      <input type="text" placeholder="title" name="title" onChange={(e) => this.setState({title: e.target.value})}/>
      <input type="text" placeholder="author" name="author" onChange={(e) => this.setState({author: e.target.value})}/>
      <input type="text" placeholder="name" name="img" onChange={(e) => this.setState({img: e.target.value})}/>
      <button type="button" onClick={() => this.props.onBookCreate(this.state)}>Add Book</button>
    </form>);
  }
}

export default Form;
