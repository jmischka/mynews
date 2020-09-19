import React, { Component } from 'react';


class Title extends Component {

  render() {
    return (
      <div className="title-container">
      	<div className="title-name">
        	<h1 className="title text-center">NEWSFEED</h1>
            <h4 className="tagline text-center">A Personalized Newsfeed using <span className="text-red">the New York Times</span> API</h4>
        </div>
        <div className="date-container">
	        <h3 className="date text-center"><span className="sans">DATE: </span>{this.props.today}</h3>
	        <h3 className="date text-center"><span className="sans">TIME: </span>{this.props.time}</h3>
        </div>
      </div>
    );
  }
}

export default Title;