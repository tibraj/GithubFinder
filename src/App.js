import React, { Component } from 'react';
import Navbar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [], 
    loading: false
  }
  async componentDidMount() {
    this.setState({loading: true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({users: res.data, loading: false});
  }
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/users?q=${text}`);
    this.setState({users: res.data.items, loading: false});
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <div className="container">
          <Search searchUsers={this.searchUsers}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;

// JavaScript Extension, combining JS and html. Must have one parent element.
//Fragments are ghost elements, outputting like a div without appearing in the dom 
//return React.createElement('div', { className: 'App }, React.createElement('h1', null, 'Hello from React'));