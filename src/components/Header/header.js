import React, { Component } from 'react';
import logo from '../../img/app-logo_best.png';
import './header.css';
import Subheader from '../Subheader/subheader';
import dbRefObject from '../../databaseDB';
import * as firebase from "firebase";
import Loader from 'react-loader-spinner'

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      header: "Admin Portal",
      Login:{
        email:"",
        paswrd:"",
        askLogout:"Are you sure you want to logout?",
      },
      spinner: false,
    }
    this.logout = this.logout.bind(this);
    //this.cancel = this.cancel.bind(this);
  }
    logout(){
        this.setState({spinner:true});
        setTimeout(function(){
            alert('You have successfully logout.');
            this.props.name='';
            this.setState({spinner:false});
        }.bind(this),2000)
    }

  render() {
    if(!this.state.spinner && this.props.name!='') {
        return (
            <div>
                <header className="hdr-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="hdr-title">{this.state.header}</div>
                    <div className="authSec">
                        <span className="loginLbl" data-toggle="modal" data-target="#myModal"><u>{this.props.name}</u></span>
                    </div>
                </header>
                <div className="container">
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog" style={{marginTop:10+'%'}}>
                            <div className="modal-content">
                                <div className="lognMdl">
                                    <p className="modal-title lgnPophdr">{this.state.Login.askLogout}</p>
                                </div>
                                <div className="modal-body" style={{textAlign: 'center'}}>
                                    <div style={{display: 'inline-block'}}>
                                        <button className="btn btn-outline-success" data-dismiss="modal">No</button>
                                    </div>
                                    <div style={{display:'inline-block'}}>
                                        <button className="btn btn-outline-success" data-dismiss="modal" onClick={this.logout}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subheader />
            </div>
        );
    }if(!this.state.spinner && !this.props.name!='') {
        return (
            <div>
                <header className="hdr-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="hdr-title">{this.state.header}</div>
                    <div className="authSec">
                        <span className="loginLbl" data-toggle="modal" data-target="#myModal"><u>{this.props.name}</u></span>
                    </div>
                </header>
                <div className="container">
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog" style={{marginTop:10+'%'}}>
                            <div className="modal-content">
                                <div className="lognMdl">
                                    <p className="modal-title lgnPophdr">{this.state.Login.askLogout}</p>
                                </div>
                                <div className="modal-body" style={{textAlign: 'center'}}>
                                    <div style={{display: 'inline-block'}}>
                                        <button className="btn btn-outline-success" data-dismiss="modal">No</button>
                                    </div>
                                    <div style={{display:'inline-block'}}>
                                        <button className="btn btn-outline-success" data-dismiss="modal" onClick={this.logout}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="App">
              <div className="loadStl">
                <Loader type="TailSpin" color="#00BFFF" height="100" width="100"/>  
              </div>
            </div>
        );
    }
  }
}
export default Header;
