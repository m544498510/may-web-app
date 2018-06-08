import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../LoginPage';
import AuthRoute from '../common/AuthRoute';
import Layout from '../common/Layout';
import { paths } from '../routeCfg';
import './index.less';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={paths.loginPage} component={LoginPage} />
          <AuthRoute path={paths.rootPath} component={Layout} />
        </Switch>
      </div>
    );
  }
}
