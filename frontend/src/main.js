import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Page from './view/page';

const rootElement = document.getElementById('root');

renderPage(Page);

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
  module.hot.accept('./view/page', () => {
    const NextPage = require('./view/page.js').default;
    renderPage(NextPage);
  });
}

