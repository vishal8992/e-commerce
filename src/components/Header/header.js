import React, { Component } from 'react';
import logo from '../../img/app-logo_best.png';
import './header.css';
import dbRefObject from '../../databaseDB';
import * as firebase from "firebase";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Admin Portal",
      Login:{
        email:"",
        paswrd:"",
        askLogout:"Are you sure you want to logout?"
      },
    }    
  }

  render() {
    return (
        <div>
            <header className="hdr-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="hdr-title">{this.state.header}</div>
                <div className="authSec">
                    <span className="loginLbl" data-toggle="modal" data-target="#myModal"><u>{this.props.name}</u></span>
                </div>
            </header>
            {/* <div className="container">
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
            </div> */}
        </div>
    );
  }
}
export default Header;
