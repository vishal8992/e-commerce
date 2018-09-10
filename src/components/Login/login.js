import React, { Component } from 'react';
import './login.css';
import dbRefObject from '../../commonServices';
import * as firebase from "firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email:"",paswrd:""};
    this.loginSubmit = this.loginSubmit.bind(this);
    this.loginEmailChange = this.loginEmailChange.bind(this);
    this.loginPassChange = this.loginPassChange.bind(this);
    
  }

  loginSubmit(event) {
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.paswrd).then(function(succ){
        if(succ.user.uid!=''){
            alert('You are successfully login');
        }
    }).catch(function(error) {
        if(error.code=='auth/user-not-found'){
            alert('User does not exist.');
        } else if(error.code=='auth/wrong-password') {
            alert('Password is incorrect.');
        } else if(error.code=='auth/invalid-email') {
            alert('Please enter a valid email.');
        } 
    });
  }
  
  loginEmailChange(event) {
    this.setState({email:event.target.value});
  }

  loginPassChange(event) {
    this.setState({paswrd:event.target.value});
  }

  render() {
    return (
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
    );
  }
}

export default Login;
