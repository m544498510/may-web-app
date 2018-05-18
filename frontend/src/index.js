import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';

import Main from './view/Main';

const rootElement = document.getElementById('root');

renderPage(Main);

function renderPage(Component) {
  ReactDOM.render(
    (
      <AppContainer>
        <BrowserRouter>
          <Component/>
        </BrowserRouter>
      </AppContainer>
    ),
    rootElement
  );
}

//react hot loader
if (module.hot) {
  module.hot.accept('./view/Main', () => {
    const NextPage = require('./view/Main/index.js').default;
    renderPage(NextPage);
  });
}

