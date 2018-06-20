import React from 'react';
import { createBrowserHistory } from 'history';
import Router from 'react-router-dom/Router';

let _history;
export function getHistory() {
  return _history;
}

export function createHistory(props) {
  _history = createBrowserHistory(props);
  return _history;
}


/**
 * The public API for a <Router> that uses HTML5 history.
 */
export default function BrowserRouter(props) {
  return (
    <Router
      history={_history}
    >
      {props.children}
    </Router>
  );
}
