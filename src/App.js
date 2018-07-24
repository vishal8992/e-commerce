import React, { Component } from 'react';
import Header from './components/Header/header';
//import Home from './components/Home/home';
import Userdata from './components/Userdata/userdata';
import Subheader from './components/Subheader/subheader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Welcome to Delhi",
      content: "Content from state..."
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Subheader />
        <Userdata />
        {/* <Home /> */}
      </div>
    );
  }
}
export default App;