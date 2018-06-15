import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Main from './view/Main';
import store from './core/store';

const rootElement = document.getElementById('root');

function renderPage(Component) {
  ReactDOM.render(
    (
      <AppContainer>
        <Provider store={store}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </Provider>
      </AppContainer>
    ),
    rootElement,
  );
}

renderPage(Main);

// react hot loader
if (module.hot) {
  module.hot.accept('./view/Main', () => {
    // eslint-disable-next-line
    const NextPage = require('./view/Main/index.js').default;
    renderPage(NextPage);
  });
}

