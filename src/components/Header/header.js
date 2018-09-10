import React, { Component } from 'react';
import logo from '../../img/app-logo_best.png';
import './header.css';
import dbRefObject from '../../commonServices';
import * as firebase from "firebase";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Admin Portal",
      Login:{
        email:"",
        paswrd:""
      },
      Register: {
          fullname:"",
          email:"",
          M_No:"",
          Add:"",
          Password:"",
          Conf_Password:""
      }
    }
    this.loginSubmit = this.loginSubmit.bind(this);
    this.loginEmailChange = this.loginEmailChange.bind(this);
    this.loginPassChange = this.loginPassChange.bind(this);
    
  }

  loginSubmit(event) {
    firebase.auth().signInWithEmailAndPassword(this.state.Login.email,this.state.Login.paswrd).then(function(succ){
        if(succ.user.uid!=''){
            alert('You are successfully login');
        }
    }).catch(function(error) {
        if(error.code=='auth/user-not-found'){
            alert('User does not exist.');
        } else if(error.code=='auth/wrong-password') {
            alert('Password is incorrect.');
        } else if(error.code=='auth/invalid-email') {
            alert('Please enter valid email.');
        } 
    });
  }
  
  loginEmailChange(event) {
    let login = this.state.Login;
    login.email = event.target.value;
    this.setState({Login:login});
  }

  loginPassChange(event) {
    let login = this.state.Login;
    login.paswrd = event.target.value;
    this.setState({Login:login});
  }

  render() {
    return (
        <div>
            <header className="hdr-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="hdr-title">{this.state.header}</div>
                <div className="authSec">
                    <span className="loginLbl" data-toggle="modal" data-target="#myModal"><u>Login</u></span>
                </div>
            </header>
            <div className="container">
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="lognMdl">
                                <h4 className="modal-title lgnPophdr">Login</h4>
                                <button type="button" className="close clsbtn" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group lgnpopAlgn">
                                <input type="text" value={this.state.Login.email} onChange={this.loginEmailChange} placeholder="Email Address" className="form-control emalinp" id="usr"/>
                                </div>
                                <div className="form-group lgnpopAlgn">
                                <input type="password" value={this.state.Login.paswrd} onChange={this.loginPassChange} placeholder="Password" className="form-control emalinp" id="pwd"/>
                                </div>
                                <div className="lgnBtn">
                                    <button className="btn btn-outline-success lgnBtnMn" onClick={this.loginSubmit}>Success</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default Header;
