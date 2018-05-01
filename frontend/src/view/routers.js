import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route} from "react-router-dom";

import LoginPage from './loginPage';
import "./main.less";

export default class Routers extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LoginPage}/>
        </div>
      </HashRouter>
    );
  }
}

function Home() {
  return <div>home</div>;
}

