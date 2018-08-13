import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { getUserInfo } from '~/utils/authUtils';

export default function AuthRoute(props) {
  const { component: Target, ...rest } = props;
  return (
    <Route
      {...rest}
      render={prop =>
        (getUserInfo() ? (
          <Target {...prop} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: prop.location },
            }}
          />
        ))
      }
    />
  );
}
AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

