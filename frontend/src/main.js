import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Routers from './view/routers';

const rootElement = document.getElementById('root');

renderPage(Routers);

function renderPage(Component) {
  ReactDOM.render(
    (
      <AppContainer>
        <Component/>
      </AppContainer>
    ),
    rootElement
  );
}

//react hot loader
if (module.hot) {
  module.hot.accept('./view/routers', () => {
    const NextPage = require('./view/routers.js').default;
    renderPage(NextPage);
  });
}

