import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

export default buildStore();

function buildStore() {
  let middleware = applyMiddleware(reduxThunk);

  if (typeof window.devToolsExtension === 'function') {
    middleware = compose(middleware, window.devToolsExtension());
  }

  return createStore(reducers, {}, middleware);
}
