import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { of} from 'rxjs';

of('1','2','3')
  .subscribe((v) => {
    console.log(v);
  });



ReactDOM.render(<App />, document.getElementById('root'));

