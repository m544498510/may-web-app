import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import SecretPanel from '~/view/secretPage/Panel';

import Header from '../Header';

import { paths } from '~/view/routeCfg';

export default class Layout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <Header />
        <div className="body">
          <Switch>
            <Route
              exact={false}
              path={paths.psdManagerPage}
              component={SecretPanel}
            />
            <Route path={`${match.url}b/c`} component={B} />
            <Redirect from="/" to={paths.psdManagerPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

function Topic() {
  return (
    <div> 123</div>
  );
}

function B() {
  return <div>b</div>;
}
