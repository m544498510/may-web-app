import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import Header from '../Header';

export default class Layout extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired
  };
  
  render(){
    const {match} = this.props;
    return (
      <div>
        <Header />
        <div className="body">
          <Switch>
            <Route exact={false} path={`${match.url}a`} component={Topic} />
            <Route path={`${match.url}b/c`} component={B} />
          </Switch>
        </div>
      </div>
    );
  }
}

function Topic(){
  return (
    <div> 123</div>
  )
}

function B(){
  return <div>b</div>
}
