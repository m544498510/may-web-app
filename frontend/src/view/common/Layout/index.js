import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import paths from '~/view/routeCfg';
import SecretPanel from '~/view/secretPage/Panel';

import Header from '../Header';

export default function Layout({ match }) {
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
          <Route path={`${match.url}b/c`} component={SecretPanel} />
          <Redirect from="/" to={paths.psdManagerPage} />
        </Switch>
      </div>
    </div>
  );
}

Layout.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
