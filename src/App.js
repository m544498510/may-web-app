import React, {Component} from 'react';
import {of} from 'rxjs';

import './App.css';

class App extends Component {
  state = {
    data: []
  };
  
  componentDidMount() {
    of('1', '2', '3')
      .subscribe((v) => {
        const data = this.state.data;
        data.push(v);
        this.setState({data:data});
      });
    
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.data.map(item => (
            <div key={item}>{item}</div>
          ))
        }
      </div>
    );
  }
}

export default App;
