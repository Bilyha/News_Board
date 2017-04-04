import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Menu from './../Menu'

class FirstNews extends Component{
  render() {
    console.log();
    return (
      <div className="App">
        <header>
          <Menu />
        </header>
        <section>
          <h2> {this.props.testStore[0].title}</h2>
          <p> {this.props.testStore[0].bigText}</p>
          <p className="author">{this.props.testStore[0].author}</p>
        </section>
        <footer>
            <p>Developed by <a className="devName"href="#">Ilya Babich</a></p>
        </footer>
      </div>
          )
  }
}

export default connect (
  state => ({
    testStore: state
  }),
  dispatch=>({})
)(FirstNews);


// <div className="content">
//
//       {this.props.testStore.map((news, index) =>
//           <div key={index} className="newsContainer">
//             <h2> {news.title} </h2>
//             <p> {news.text} </p>
//             <a href="#"> Read more...</a>
//             <h3>{news.author} </h3>
//           </div>
//       )}
//
//     <div className="addNewsForm">
//
//     </div>
// </div>
