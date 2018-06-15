import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

@withRouter
export default class SecretPanel extends Component {
  render() {
    return (
      <div>
        {this.props.history.location.pathname}
      </div>
    );
  }
}
