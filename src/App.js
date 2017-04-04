import React, { Component } from 'react';
import { connect } from "react-redux";

import NewsCards from "./newsCards"
import './App.css';
import Menu from './Menu'

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">
        <header>
          <Menu />
        </header>
        <section>
          <NewsCards />
        </section>
        <footer>
            <p>Developed by <a className="devName"href="#">Ilya Babich</a></p>
        </footer>
      </div>
    );
  }
}


export default connect (
  state => ({
    testStore: state
  }),
  dispatch=>({})
)(App);
