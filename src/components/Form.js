import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    image: ''
  }
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  handleChangeImage = (event) => {
    this.setState({
      image: event.target.value
    })
  }
    render() {
    return <h1>
            <form onSubmit={() => this.props.handleSubmit(this.state.title)}>
              <label>
                Title:
                <input type='text' value={this.state.title} onChange={this.handleChangeTitle}/>
              </label>
              <br/>
              <label>
                Image:
                <input type='text' value={this.state.image} onChange={this.handleChangeImage}/>
              </label>
              <br/>
              <input type="submit" value="Submit" />
            </form>
          </h1>;
  }
}

export default Form;
