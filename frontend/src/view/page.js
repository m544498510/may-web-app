import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import LoginPage from './loginPage';
import "./main.less";

export default class Page extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/public">public</Link>
            </li>
          </ul>
          
          <Switch>
            <Route path="/public" component={Home}/>
            <Route path="/login" component={LoginPage}/>
            
            <Route path="/a" component={A}/>
            <Route path="/b" component={B}/>
          </Switch>
          <Route path="/a" component={A}/>
          <Route path="/a/b" component={B}/>
          <Route path="/inbox" component={Inbox}/>
        
        
        </div>
      </BrowserRouter>
    );
  }
}

const Inbox = ({match}) => (
  <div>
    <h2>Topics</h2>
    <Route path={`${match.url}/messages/:id`} component={Message}/>
  
  </div>
);

const Message = ({match}) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
);

function Home({children}) {
  return (
    <Fragment>
      <div>home</div>
      {children}
    </Fragment>
  );
}

function Public() {
  console.log(1);
  return (
    <div>public</div>
  );
}

function A() {
  return (
    <div>a</div>
  );
}

function B() {
  return (
    <div>b</div>
  );
}
