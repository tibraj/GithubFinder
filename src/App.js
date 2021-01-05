import React, { Component } from 'react';
import Navbar from './components/layout/NavBar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;

// JavaScript Extension, combining JS and html. Must have one parent element.
//Fragments are ghost elements, outputting like a div without appearing in the dom 
//return React.createElement('div', { className: 'App }, React.createElement('h1', null, 'Hello from React'));