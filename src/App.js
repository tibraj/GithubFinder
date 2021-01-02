import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars';
  render() {
    const name = 'Jane Doe';
    const loading = true;
    const showName = true;
    return (
      <div className="App">
        {loading ? <h4>Loading...</h4> : <h1>Hello {this.foo()}</h1>}
      </div>
    );
  }
}

export default App;

// JavaScript Extension, combining JS and html. Must have one parent element.
//Fragments are ghost elements, outputting like a div without appearing in the dom 
//return React.createElement('div', { className: 'App }, React.createElement('h1', null, 'Hello from React'));