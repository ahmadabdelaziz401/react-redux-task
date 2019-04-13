import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/reducer';
import ConfPage from './ConfPage';
import Home from './componentss/Home'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk));

const home = () => (
  <Provider store={store}>
    <Home/>
  </Provider>
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/confPage" component={ConfPage}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
