import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';

export default class Layout extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired
  };
  
  render(){
    const {match} = this.props;
    return (
      <div>
        <Route path={`${match.url}/a`} component={Topic} />
        <Route path={`${match.url}/b`} component={B} />
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
