import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const var1 = {
      key1: 'Some Data'
    }

    return (
      <div className="App">
        {var1.key1}
      </div>
    )
  }
}

export default App;