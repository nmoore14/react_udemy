import React, { Component } from 'react';
import Component1 from './functional/component1';
import Container1 from './containers/container1';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        React
        <Container1 nickname="nuggz" />
        <Component1 name="Nick" age="30"/>
      </div>
    )
  }
}

export default App;