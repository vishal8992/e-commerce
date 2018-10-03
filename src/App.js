import React, { Component } from 'react';
import Header from './components/Header/header';
import commonObj from './commonServices';
import './App.css';
import dbRefObject from './databaseDB';
import * as firebase from "firebase";
import Loader from 'react-loader-spinner'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"vishal.jain@newgen.co.in",
      paswrd:"12345678",
      loginUser:false,
      spinner: false
    }
    this.loginSubmit = this.loginSubmit.bind(this);
    this.loginEmailChange = this.loginEmailChange.bind(this);
    this.loginPassChange = this.loginPassChange.bind(this);
  }

  loginSubmit(event) {
    this.setState({spinner:true});
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.paswrd).then(function(succ){
        if(succ.user.uid!=''){
            this.setState({loginUser:true});
            this.setState({spinner:false});
        }
    }.bind(this)).catch(function(error) {
        this.setState({loginUser:false});
        this.setState({spinner:false});
        if(error.code=='auth/user-not-found'){
            alert('User does not exist.');
        } else if(error.code=='auth/wrong-password') { 
            alert('Password is incorrect.');
        } else if(error.code=='auth/invalid-email') {
            alert('Please enter a valid email.');
        } 
    }.bind(this));
  }
  
  loginEmailChange(event) {
    this.setState({email:event.target.value});
  }

  loginPassChange(event) {
    this.setState({paswrd:event.target.value});
  }

  render() {
      if(this.state.loginUser && !this.state.spinner) {
        return(
          <div className="App">
            <Header name="Logout"/>
            
          </div>
        );  
      } else if (!this.state.loginUser && !this.state.spinner){
        return(
          <div className="App"> 
            <Header name=""/>
            <div>
                <div className="modal-body itemPrnt loginBx">
                    <div className="form-group lgnBxAlgn">
                        <input type="text" value={this.state.email} onChange={this.loginEmailChange} placeholder="Email Address" className="form-control emalinp" id="usr"/>
                    </div>
                    <div className="form-group lgnBxAlgn">
                        <input type="password" value={this.state.paswrd} onChange={this.loginPassChange} placeholder="Password" className="form-control emalinp" id="pwd"/>
                    </div>
                    <div className="lgnBtn">
                        <button className="btn btn-outline-success lgnBtnMn" onClick={this.loginSubmit}>Submit</button>
                    </div>
                </div>
            </div>
          </div>
        );
      } else {
        return(
          <div className="App">
            <Header name=""/>
            <div className="loadStl">
              <Loader type="TailSpin" color="#00BFFF" height="100" width="100"/>  
            </div>
          </div>
         );
      }
  }
}
export default App;