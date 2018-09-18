import React, { Component } from 'react';
import Header from './components/Header/header';
import Login from './components/Login/login';
import Subheader from './components/Subheader/subheader';
import commonObj from './commonServices';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Welcome to Delhi",
      content: "Content from state...",
      loginUser:commonObj.loginUser
    }
  }

  render() {
      if(this.state.loginUser) {
        return(
          <div className="App">
            <Header />
            <Subheader />
          </div>
        );  
      } else {
        return(
          <div className="App">
            <Header />
            <Login />
          </div>
        );
      }
      
  }
}
export default App;