import React, { Component } from 'react';


class SectionForm extends Component {
  render() {
    return (
      	<form className="section-form" onSubmit={this.props.loadSections}>
          <h4 className="direction text-center"><span className="text-red">Step 1:</span> Select a News Section You're Interested In:</h4> 
          <div className="direction-box text-center">  
      		 {this.props.sections.map(section => 
      		 	<label className="section-label" key={section}>
      		 		<input className="section-box" type="radio" name="sectionButton" value={section} />
      		 	{section}
      		 	</label>)}
          </div>
          <h4 className="direction text-center"><span className="text-red">Step 2:</span> Start Your Feeding:</h4>
          <button className="submit-button text-center">FEED ME</button>       		
      	</form>
    );
  } 
}

export default SectionForm;