import React, {Component} from 'react';
import { connect } from 'react-redux';
import Menu from "./../Menu"


class SecondNews extends Component{
  render() {
    return (
      <div className="App">
        <header>
          <Menu />
        </header>
        <section>
          <h2> {this.props.testStore[1].title}</h2>
          <p> {this.props.testStore[1].bigText}</p>
          <p className="author">{this.props.testStore[1].author}</p>
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
)(SecondNews);
