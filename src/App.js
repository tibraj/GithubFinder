import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Navbar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [], 
    loading: false,
    alert: null
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
  clearUsers = () => this.setState({users: [], loading: false});
  setAlert = (message, type) => {
    this.setState({alert: {message: message, type: type}});
    setTimeout(() => this.setState({alert: null}), 5000);
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
            />
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;

// JavaScript Extension, combining JS and html. Must have one parent element.
//Fragments are ghost elements, outputting like a div without appearing in the dom 
//return React.createElement('div', { className: 'App }, React.createElement('h1', null, 'Hello from React'));