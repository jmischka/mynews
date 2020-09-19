import React, { Component } from 'react';


class SectionDisplay extends Component {
  render() {
    return (
      <ul className="SectionDisplay">
      	{this.props.articles.map((article, index) => 
      		<li className="article-list-item" key={index}>
      			<a className="article-link" target="blank" href={article.url}>
              {article.multimedia.length > 0 ?
                  <img className="article-img" src={article.multimedia[2].url} alt={article.caption} />
                  :
                  null
              }
        			<h2 className="article-title">{article.title}</h2>
              <p className="article-byline">{article.byline}</p>
      			</a>
      		</li>
      	)}
      </ul>
    );
  }
}

export default SectionDisplay;

