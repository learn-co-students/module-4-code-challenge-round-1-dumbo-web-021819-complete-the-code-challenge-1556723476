import React from "react";

class Form extends React.Component {

  state = {
    whyDoWePutThisShitInStateBeforeItIsSubmitted: {}
  }

  handleChange = (e) => {
    const key = e.target.placeholder;
    const value = e.target.value;
    const kerValur = {[key]: value}
    const kippityCopy = {...this.state.whyDoWePutThisShitInStateBeforeItIsSubmitted}
    kippityCopy[key] = value
    this.setState({whyDoWePutThisShitInStateBeforeItIsSubmitted: kippityCopy })
  }

  render() {
    return <h1 onChange={this.handleChange}>
        <input type='text' placeholder='title'></input>
        <input type='text' placeholder='author'></input>
        <input type='text' placeholder='img'></input>
        <input type='submit' onClick={() => this.props.fuckItUpToTheTempo(this.state.whyDoWePutThisShitInStateBeforeItIsSubmitted)}></input>
      </h1>;
  }
}

export default Form;
