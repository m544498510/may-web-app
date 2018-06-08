import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { getUserInfo } from '~/utils/authUtils';

export default class AuthRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
  };

  render() {
    const { component: Target, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          (getUserInfo() ? (
            <Target {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          ))
        }
      />
    );
  }
}
