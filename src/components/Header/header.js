import React, { Component } from 'react';
import logo from '../../img/app-logo_best.png';
import './header.css';

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
    fetch('http://192.168.38.47:8080/AuthenticationWS/rest/AuthenticateService/User', {
            method: 'POST',
            body: JSON.stringify({
                username: 'vishal',
                password: '1234',
            })
        }).then(function(Response) {
             alert('Success '+Response)
        }).then(function(Response) {
            alert('Err '+Response);
        })
    //alert(JSON.stringify(this.state.Login))
    //event.preventDefault();
  }
  /* Event Handler*/
  
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
                                <form onSubmit={this.loginSubmit}>
                                    <div className="form-group lgnpopAlgn">
                                    <input type="text" value={this.state.Login.email} onChange={this.loginEmailChange} placeholder="Email Address" className="form-control emalinp" id="usr"/>
                                    </div>
                                    <div className="form-group lgnpopAlgn">
                                    <input type="password" value={this.state.Login.paswrd} onChange={this.loginPassChange} placeholder="Password" className="form-control emalinp" id="pwd"/>
                                    </div>
                                    <div className="lgnBtn">
                                        <button type="submit" className="btn btn-outline-success lgnBtnMn">Success</button>
                                    </div>
                                
                                </form>
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
