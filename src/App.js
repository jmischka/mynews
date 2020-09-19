import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import SectionForm from './SectionForm';
import SectionDisplay from './SectionDisplay';

const sections = ['opinion', 'travel', 'world', 'arts', 'science', 'sports', 'technology', 'food'];


class App extends Component {

	constructor(){
		super();		
		const today = new Date().toDateString();
		const time = new Date().toLocaleTimeString();
		this.state = {
			today: today,
			time: time,
			pickedSections: [],
		};
		this.loadSections = this.loadSections.bind(this);
	}

	componentDidMount() {
	    setInterval(
	      () => this.seconds(),
	      1000
	    );
	  }

	seconds(){
		this.setState({time: new Date().toLocaleTimeString()});
	}

	loadSections(event) {
		event.preventDefault();
		// var newArray = this.state.pickedSections.slice();
		// let sections = [];
		const checkboxes = document.querySelectorAll('.section-box');

		for(const checkbox of checkboxes){
			if (checkbox.checked){
				axios.get("https://api.nytimes.com/svc/topstories/v2/" + checkbox.value + ".json?api-key=YBRZP7RvCZvgcaYNKnfK3ds4dLhSWuB4")
				.then(obj => {
					const posts = obj.data.results;
					this.setState({pickedSections:posts});
				})
			}
		}
	}

  render() {
    return (
      <div className="App">
        <Title today={this.state.today} time={this.state.time} />
        <SectionForm sections={sections} loadSections={this.loadSections} />
        <SectionDisplay articles={this.state.pickedSections} />
      </div>
    );
  }
}	

export default App;
