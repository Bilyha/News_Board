import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NewsCards extends Component{
  render() {
    console.log(this.props.testStore);
    return (
      <div className="content">

            {this.props.testStore.map((news, index) =>
                <div key={index} className="newsContainer">
                  <h2> {news.title} </h2>
                  <p> {news.text} </p>
                <Link to={news.title}> Read more...</Link>
                  <h3>{news.author} </h3>
                </div>
            )}

          <div className="addNewsForm">

          </div>
      </div>
    )
  }
}

export default connect (
  state => ({
    testStore: state
  }),
  dispatch=>({})
)(NewsCards);
