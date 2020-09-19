import React, { Component } from 'react';


class ArticleLink extends Component {
  render() {
    return (
      <li className="article-list-item">
      	<a target="blank" href={this.props.details.url}>
      		<h3>{this.props.details.title}</h3>
      	</a>
      </li>
    );
  }
}

export default ArticleLink;