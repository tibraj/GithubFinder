import React, { Component } from 'react';
import Navbar from './components/layout/NavBar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <UserItem />
      </div>
    );
  }
}

export default App;

// JavaScript Extension, combining JS and html. Must have one parent element.
//Fragments are ghost elements, outputting like a div without appearing in the dom 
//return React.createElement('div', { className: 'App }, React.createElement('h1', null, 'Hello from React'));