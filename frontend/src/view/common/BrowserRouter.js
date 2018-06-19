import React from "react";
import PropTypes from "prop-types";
import { createBrowserHistory as createHistory } from "history";
import Router from "react-router-dom/Router";

let _history;
/**
 * The public API for a <Router> that uses HTML5 history.
 */
class BrowserRouter extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
    children: PropTypes.node
  };
  
  constructor(props, context){
    super(props, context);
    _history = this.history = createHistory(props);
  }
  
  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default BrowserRouter;

export function getHistory(){
  return _history;
}
