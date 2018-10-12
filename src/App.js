import React, { Component } from 'react';
import Header from './components/Header/header';
import commonObj from './commonServices';
import './App.css';
import dbRefObject from './databaseDB';
import * as firebase from "firebase";
import Loader from 'react-loader-spinner'
import Subheader from './components/Subheader/subheader'
import Login from './components/Login/login'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      if(!this.props.loginUser) {
        return(
          <div className="App">
            <Header name="Logout"/>
            <Subheader />
          </div>
        );  
      } else {
        return(
          <div className="App"> 
            <Header name=""/>
            <Login />
          </div>
        );
      }
  }
}
export default App;