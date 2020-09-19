import React, { Component } from 'react';


class Checkbox extends Component {
  render() {
    return (
      	<label key={this.props.key}>
      	<input type="checkbox" value={this.props.value} />
      	{this.props.name}
      	</label>
    );
  } 
}

export default Checkbox;