import React, { Component } from 'react';
import Component1 from './functional/component1';
import Container1 from './containers/container1';

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        React
        {false
          ? true ? <div>Condition 1</div> : <div>Condition 2</div>
          : true ? <div>Condition 3</div> : <div>Condition 4</div>
        }
      </div>
    )
  }
}

export default App;