import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
      <h1>Form</h1>
      <form>
      <input type="text" placeholder={'title'} />
      <input type="text" placeholder={'author'} />
      <input type="text" placeholder={'img'} />
      <input type="submit" value='submit' />
      </form>
      </div>
    );
  }
}

export default Form;
