import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory } from 'react-router';


import App from './App';
import FirstNews from "./NewsPages/FirstNews"
import SecondNews from "./NewsPages/SecondNews"
import ThirdNews from "./NewsPages/ThirdNews"
import FourthNews from "./NewsPages/FourthNews"
import './index.css';

const initialState = [
  {
    id: 1,
    title: 'FirstNews',
    author: 'B.Walters',
    text: "Lorem ipsum dolor sit amet, consec... ",
    bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    title: 'SecondNews',
    author: 'B.Woodward',
    text: "Lorem ipsum dolor sit amet, consec... ",
    bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    title: 'ThirdNews',
    author: 'C.Bernstein',
    text: "Lorem ipsum dolor sit amet, consec... ",
    bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 4,
    title: 'FourthNews',
    author: 'H.S.Thompson',
    text: "Lorem ipsum dolor sit amet, consec... ",
    bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
]

function news(state = initialState, action) {
  if (action.type === "ADD_NEWS")
    return [
      ...state,
      action.payload
    ];
  return state;
}

const store = createStore(news);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}/>
      <Router path='FirstNews' component={FirstNews}/>
      <Router path='SecondNews' component={SecondNews}/>
      <Router path='ThirdNews' component={ThirdNews}/>
      <Router path='FourthNews' component={FourthNews}/>

    </Router>
  </Provider>,
  document.getElementById('root')
);
