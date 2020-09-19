import React, { Component } from 'react';


class InputForm extends Component {

  render() {
    return (
      <form className="text-center">
        <label>
        Enter A Username:
        <input type="text" value={this.props.value} onChange={this.props.onChange} />
        </label>
        <button className="submit-button">SUBMIT</button>
      </form>
    );
  }
}

export default InputForm;