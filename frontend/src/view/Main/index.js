import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import LoginPage from '../LoginPage';
import AuthRoute from '../common/AuthRoute';
import Layout from '../common/Layout';
import "./index.less";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <AuthRoute exact path="/a" component={Layout}/>
        </Switch>
      </div>
    );
  }
}
